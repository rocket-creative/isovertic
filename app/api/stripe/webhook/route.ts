import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

// Stripe webhook. Configure the endpoint at /api/stripe/webhook for:
// checkout.session.completed, checkout.session.async_payment_succeeded, checkout.session.async_payment_failed,
// customer.subscription.updated, customer.subscription.deleted, invoice.payment_failed.
// Records land in public.subscriptions; the notify email gets one line per event.

export const runtime = "nodejs";

function db() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

async function notify(subject: string, text: string) {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "sale@isovertic.com";
  if (!resendKey || !to) return;
  try {
    await new Resend(resendKey).emails.send({ from: `ISOVERTIC <${from}>`, to, subject, text });
  } catch (e) {
    console.error("notify failed", (e as Error).message);
  }
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers.get("stripe-signature");
  if (!secret || !sig) return NextResponse.json({ error: "webhook not configured" }, { status: 500 });

  let event: Stripe.Event;
  try {
    const body = await req.text();
    event = stripe().webhooks.constructEvent(body, sig, secret);
  } catch (e) {
    return NextResponse.json({ error: `signature: ${(e as Error).message}` }, { status: 400 });
  }

  const supabase = db();

  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded" || event.type === "checkout.session.async_payment_failed") {
    const s = event.data.object;
    const email = s.customer_details?.email || s.customer_email || "";
    const plan = s.metadata?.plan || "";
    const status = event.type === "checkout.session.async_payment_failed" ? "bank_payment_failed" : s.payment_status === "paid" ? "active" : "pending_bank_clearance";
    const row = {
      stripe_customer_id: typeof s.customer === "string" ? s.customer : s.customer?.id || null,
      stripe_subscription_id: typeof s.subscription === "string" ? s.subscription : s.subscription?.id || null,
      checkout_session_id: s.id,
      email,
      plan,
      term_months: Number(s.metadata?.term_months || 0),
      agreed_term: s.metadata?.agreed_term === "yes",
      status,
      amount_total: s.amount_total ?? null,
    };
    if (supabase) {
      const { error } = await supabase.from("subscriptions").upsert(row, { onConflict: "checkout_session_id" });
      if (error) console.error("subscriptions upsert", error.message);
    }
    const subject = status === "active" ? `New signup: ${email} (${plan})` : status === "pending_bank_clearance" ? `Signup pending bank clearance: ${email} (${plan})` : `Bank payment failed: ${email} (${plan})`;
    await notify(subject, `Email: ${email}\nCompany: ${s.metadata?.company || ""}\nPlan: ${plan}\nStatus: ${status}\nPayment method: ${s.payment_method_types?.join(", ") || ""}\nTerm months: ${row.term_months}\nAgreed to term: ${row.agreed_term}\nAmount: ${((s.amount_total ?? 0) / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}\nCheckout: ${s.id}\nSubscription: ${row.stripe_subscription_id}\n\nIntake form arrives separately when they submit /welcome.`);
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
    const sub = event.data.object;
    if (supabase) {
      const { error } = await supabase.from("subscriptions").update({ status: sub.status, updated_at: new Date().toISOString() }).eq("stripe_subscription_id", sub.id);
      if (error) console.error("subscriptions update", error.message);
    }
    if (event.type === "customer.subscription.deleted") {
      await notify(`Subscription canceled: ${sub.id}`, `Plan: ${sub.metadata?.plan || ""}\nStatus: ${sub.status}`);
    }
  }

  if (event.type === "invoice.payment_failed") {
    const inv = event.data.object;
    await notify(`Payment failed: ${inv.customer_email || inv.customer}`, `Invoice: ${inv.id}\nAmount due: ${inv.amount_due}\nAttempt: ${inv.attempt_count}`);
  }

  return NextResponse.json({ received: true });
}
