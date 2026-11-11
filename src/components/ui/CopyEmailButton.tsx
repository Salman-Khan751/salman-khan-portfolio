"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable (insecure context); the mailto link still works */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line-hi px-3 py-1.5 text-[0.8rem] font-medium text-fg-dim transition-colors duration-200 hover:border-accent hover:text-accent-text"
    >
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only"> email address</span>
    </button>
  );
}
