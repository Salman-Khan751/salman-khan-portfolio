"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { PERSON } from "@/data/profile";
import { cn } from "@/lib/cn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 600;

type Field = "name" | "email" | "message";
type Form = Record<Field, string>;

function validate(form: Form): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  if (!form.name.trim()) errors.name = "Enter your name.";
  else if (form.name.trim().length < 2) errors.name = "Your name looks too short.";

  if (!form.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";

  if (!form.message.trim()) errors.message = "Tell me a little about what you’re building.";
  else if (form.message.trim().length < 10) errors.message = "Add a few more details (at least 10 characters).";
  else if (form.message.length > MAX_MESSAGE) errors.message = `Keep it under ${MAX_MESSAGE} characters.`;
  return errors;
}

const inputClass =
  "w-full rounded-xl border bg-bg px-4 py-3 text-[0.98rem] text-fg placeholder:text-fg-faint transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error" | "failed">("idle");

  const errors = validate(form);
  const showError = (f: Field) => (touched[f] ? errors[f] : undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };
  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const data = new FormData(e.currentTarget as HTMLFormElement);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: data.get("website") ?? "" }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTouched({});
        return;
      }
      if (res.status !== 501) {
        setStatus("failed");
        return;
      }
    } catch {
      /* network error: fall through to the email-app fallback */
    }
    // Server-side sending isn't configured (or unreachable): open the visitor's email app, pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`);
    window.location.href = `mailto:${PERSON.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  };

  const shake = { x: [0, -6, 6, -4, 4, 0] };

  const renderError = (f: Field) => (
    <AnimatePresence initial={false}>
      {showError(f) && (
        <m.p
          id={`${f}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-[0.85rem] text-danger"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <FiAlertCircle aria-hidden="true" className="shrink-0" /> {errors[f]}
        </m.p>
      )}
    </AnimatePresence>
  );

  const fieldProps = (f: Field) => ({
    id: f,
    name: f,
    value: form[f],
    onChange,
    onBlur,
    "aria-invalid": showError(f) ? true : undefined,
    "aria-describedby": showError(f) ? `${f}-error` : undefined,
    className: cn(inputClass, showError(f) ? "border-danger" : "border-line-hi"),
    animate: showError(f) ? shake : { x: 0 },
    transition: { duration: 0.4 },
  });

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-[0.9rem] font-medium">Your name</label>
        <m.input {...fieldProps("name")} autoComplete="name" placeholder="Ada Lovelace" />
        {renderError("name")}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-[0.9rem] font-medium">Your email</label>
        <m.input {...fieldProps("email")} type="email" autoComplete="email" placeholder="ada@example.com" />
        {renderError("email")}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.9rem] font-medium">What are you building?</label>
        <m.textarea {...fieldProps("message")} rows={5} maxLength={MAX_MESSAGE} placeholder="A role, a project, or an idea you’d like to talk through." />
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">{renderError("message")}</div>
          <span className="mt-1.5 font-mono text-[0.75rem] text-fg-faint">{form.message.length}/{MAX_MESSAGE}</span>
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-solid px-6 py-3.5 font-semibold text-white transition-[transform,box-shadow,background-color] duration-300 ease-out-expo disabled:opacity-70 hover:-translate-y-0.5 hover:bg-accent-solid-hover hover:shadow-[0_14px_34px_-12px_var(--glow)] active:scale-[0.98] sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"} <FiSend aria-hidden="true" />
      </button>

      <div aria-live="polite">
        <AnimatePresence mode="wait">
          {status === "sent" && (
            <m.p key="sent" className="flex items-start gap-2 text-[0.92rem] text-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0" />
              Message sent. I’ll reply to the email address you gave.
            </m.p>
          )}
          {status === "failed" && (
            <m.p key="failed" className="flex items-start gap-2 text-[0.92rem] text-danger" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <FiAlertCircle aria-hidden="true" className="mt-1 shrink-0" />
              The message couldn’t be sent. Try again, or write to {PERSON.email}.
            </m.p>
          )}
          {status === "mailto" && (
            <m.p key="ok" className="flex items-start gap-2 text-[0.92rem] text-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0" />
              Your email app should now be open with the message ready to send. If nothing opened, write to {PERSON.email}.
            </m.p>
          )}
          {status === "error" && (
            <m.p key="err" className="flex items-start gap-2 text-[0.92rem] text-danger" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <FiAlertCircle aria-hidden="true" className="mt-1 shrink-0" />
              Fix the highlighted fields, then send again.
            </m.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
