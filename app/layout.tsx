import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinity.ai"),
  title: {
    default: "Sovereign AI Infrastructure Software for European Enterprises",
    template: "%s | Xinity AI",
  },
  description:
    "Run any AI model on your own servers. On-premise, GDPR-compliant, zero cloud. Sovereign AI infrastructure for European enterprises — deployed in days.",
  keywords: [
    "sovereign AI",
    "on-premise AI",
    "GDPR AI",
    "EU AI Act",
    "European AI infrastructure",
    "self-hosted AI",
    "private AI",
    "OpenAI compatible API",
  ],
  authors: [{ name: "Xinity AI" }],
  creator: "Xinity AI",
  openGraph: {
    type: "website",
    locale: "en_EU",
    url: "https://xinity.ai",
    siteName: "Xinity AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xinity AI — Sovereign AI Infrastructure for Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign AI Infrastructure Software for European Enterprises",
    description:
      "Run any AI model on your own servers. On-premise, GDPR-compliant, zero cloud.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xinity AI",
  url: "https://xinity.ai",
  logo: "https://xinity.ai/logo.png",
  description:
    "Sovereign AI infrastructure software for European enterprises. Run generative AI fully on-premise.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Am Gestade 5/2",
    addressLocality: "Vienna",
    postalCode: "1010",
    addressCountry: "AT",
  },
  foundingDate: "2024",
  sameAs: ["https://github.com/xinity-ai/xinity-ai"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Xinity AI",
  url: "https://xinity.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
