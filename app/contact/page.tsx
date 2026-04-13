import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Xinity AI — Book a Demo or Get in Touch",
  description:
    "Contact Xinity AI to book a sovereign AI demo or ask questions about on-premise deployment, pricing, and GDPR compliance.",
  alternates: { canonical: "https://xinity.ai/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
