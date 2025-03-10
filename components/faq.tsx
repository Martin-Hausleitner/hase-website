"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Is FlirtAgent GDPR-Compliant?",
      answer: "Yes. We can implement full GDPR compliance upon request.",
    },
    {
      question: "Does It Operate Autonomously?",
      answer: "Yes. FlirtAgent self-validates and optimizes itself.",
    },
    {
      question: "Which Languages Are Supported?",
      answer: "We cover over 100 languages, leveraging state-of-the-art AI for global reach.",
    },
    {
      question: "What Is the Pricing Structure?",
      answer: "More cost-effective than human chatters. Contact us for a personalized quote.",
    },
    {
      question: "What Kind of AI Models Do You Use?",
      answer: "A strategic blend of Vision, Video, Speech-to-Text, Generative, and Reasoning models.",
    },
    {
      question: "Can FlirtAgent Handle Multiple Chats Simultaneously?",
      answer: "Absolutely. Our infrastructure scales to millions of concurrent interactions.",
    },
    {
      question: "How Are Media Sales Priced?",
      answer: "The system factors in industry averages, customer budgets, and behavioral data to optimize pricing.",
    },
    {
      question: "How Is Overall Pricing Calculated?",
      answer: "We use AI token consumption. Costs vary depending on data complexity (e.g., images/videos/audio vs. text).",
    },
    {
      question: "How Does FlirtAgent Choose Optimal Media?",
      answer: "It automatically analyzes and selects from a synced knowledge base for maximum engagement.",
    },
    {
      question: "Does It Retain Conversation History?",
      answer: "Yes. We store up to 4000 messages in the Agent Kontext and expand via knowladgebase as needed.",
    },
    {
      question: "What Is the Usual Response Time?",
      answer: "Between 50 and 120 seconds, depending on media types.",
    },
    {
      question: "Is Integration with Platforms Like OnlyFans Possible?",
      answer: "Absolutely. Our flexible API enables quick integration with major platforms.",
    },
  ]

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

