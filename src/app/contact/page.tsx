import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-background)] px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-[var(--color-text)]">Contact Us</h1>
      <div className="w-full max-w-md">
        <ContactForm
          copy={{
            name: "Your name",
            email: "Your email",
            message: "Your message",
            submit: "Send message",
            sending: "Sending...",
            success: "Message sent. We will be in touch soon.",
            error: "We could not send your message. Please try again.",
          }}
        />
      </div>
    </main>
  );
}
