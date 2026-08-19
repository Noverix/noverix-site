"use client";

import { useActionState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { sendContactEmail } from "@/app/contact/actions";

type ContactFormCopy = {
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

const initialState = { success: false, message: "" };

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <input
        type="text"
        name="name"
        placeholder={copy.name}
        aria-label={copy.name}
        className="w-full rounded-2xl border border-[rgba(95,129,174,0.18)] bg-white/90 px-4 py-3 text-[var(--nv-text-strong)] placeholder:text-[var(--nv-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--nv-accent)]"
        required
      />
      <input
        type="email"
        name="email"
        placeholder={copy.email}
        aria-label={copy.email}
        className="w-full rounded-2xl border border-[rgba(95,129,174,0.18)] bg-white/90 px-4 py-3 text-[var(--nv-text-strong)] placeholder:text-[var(--nv-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--nv-accent)]"
        required
      />
      <textarea
        name="message"
        placeholder={copy.message}
        aria-label={copy.message}
        rows={5}
        className="w-full resize-y rounded-2xl border border-[rgba(95,129,174,0.18)] bg-white/90 px-4 py-3 text-[var(--nv-text-strong)] placeholder:text-[var(--nv-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--nv-accent)]"
        required
      />
      <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
      {state.message && (
        <p className={state.success ? "text-sm text-green-600" : "text-sm text-red-600"}>
          {state.success ? copy.success : copy.error}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex min-h-[52px] w-fit items-center justify-center rounded-full bg-gradient-to-br from-[var(--nv-accent-soft)] to-[var(--nv-accent)] px-6 font-extrabold text-[#0b0f15] shadow-[0_10px_25px_var(--nv-accent-glow)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-50"
      >
        {isPending ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
