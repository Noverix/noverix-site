"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const turnstileToken = formData.get("cf-turnstile-response") as string;

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
    return { success: false, message: "Human verification failed. Please try again." };
  }

  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: process.env.CONTACT_TO_EMAIL!,
    subject: `New message from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return { success: false, message: "Failed to send message. Please try again." };
  }

  return { success: true, message: "Message sent! We'll be in touch soon." };
}
