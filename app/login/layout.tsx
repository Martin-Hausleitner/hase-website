import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Access your FlirtAgent dashboard to manage your AI agents, view analytics, and optimize engagement with your fans.",
  openGraph: {
    title: "Login to FlirtAgent",
    description: "Access your FlirtAgent dashboard to manage your AI agents, view analytics, and optimize engagement.",
    url: "https://flirtagent.ai/login",
    type: "website"
  },
  alternates: {
    canonical: "/login"
  }
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}