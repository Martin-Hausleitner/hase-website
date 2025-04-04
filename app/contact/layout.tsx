import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the FlirtAgent team. We're here to answer your questions about our AI-powered chat automation platform for content creators.",
  openGraph: {
    title: "Contact FlirtAgent - AI-Powered Chat Automation",
    description: "Get in touch with the FlirtAgent team. We're here to answer your questions about our AI-powered chat automation platform.",
    url: "https://flirtagent.ai/contact",
    type: "website"
  },
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}