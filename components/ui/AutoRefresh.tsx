"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Re-requests the current page on a timer so a server rendered progress view stays current.
export function AutoRefresh({ seconds = 8 }: { seconds?: number }) {
  const router = useRouter();
  useEffect(() => {
    const id = setInterval(() => router.refresh(), seconds * 1000);
    return () => clearInterval(id);
  }, [router, seconds]);
  return null;
}
