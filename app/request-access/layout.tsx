import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Access",
  description: "Join the waitlist for FlirtAgent's AI-powered chat automation platform. Request early access to revolutionize your fan engagement today.",
  openGraph: {
    title: "Request Access to FlirtAgent",
    description: "Join the waitlist for FlirtAgent's AI-powered chat automation platform. Get early access to our revolutionary technology.",
    url: "https://flirtagent.ai/request-access",
    type: "website"
  },
  alternates: {
    canonical: "/request-access"
  }
};

export default function RequestAccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}