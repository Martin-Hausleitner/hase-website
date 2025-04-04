import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | FlirtAgent",
  description: "Explore all the powerful features of FlirtAgent's AI-powered chat automation system.",
}

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}