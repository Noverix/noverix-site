"use client";

import { useActionState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { sendContactEmail } from "./actions";

const initialState = { success: false, message: "" };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-background)] px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-[var(--color-text)]">Contact Us</h1>
      <form action={formAction} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] placeholder:text-[var(--color-secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />
        <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
        {state.message && (
          <p className={state.success ? "text-green-500" : "text-red-500"}>{state.message}</p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded bg-[var(--color-primary)] px-4 py-2 text-[var(--color-surface)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-primary)_86%,var(--color-text))] disabled:opacity-50"
        >
          {isPending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </main>
  );
}
