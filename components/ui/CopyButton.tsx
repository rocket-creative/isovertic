"use client";
import { useState } from "react";

// Copies a block of text to the clipboard and confirms it for two seconds.
export function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="paper-action"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard access can be refused. The text is on the page to select by hand.
        }
      }}
    >
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
