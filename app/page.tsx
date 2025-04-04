import type { Metadata } from "next";
import Hero from "@/components/hero"
import Features from "@/components/features"
import Comparison from "@/components/comparison"
import Faq from "@/components/faq"
import Cta from "@/components/cta"

export const metadata: Metadata = {
  title: "FlirtAgent - AI-Powered Chat Automation for Content Creators",
  description:
    "Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7. Increase engagement and revenue with 24/7 AI chat automation.",
  keywords: [
    "AI chat",
    "content creator",
    "chat automation",
    "fan engagement",
    "revenue boost",
    "AI agent",
    "flirty chats",
    "OnlyFans automation",
    "creator economy",
    "chat management",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Comparison />
      <Faq />
      <Cta />
    </>
  )
}