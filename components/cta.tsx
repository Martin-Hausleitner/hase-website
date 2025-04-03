"use client"

import { useState } from "react"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import RequestAccessDialog from "@/components/request-demo-dialog"

export default function Cta() {
  const [isAccessOpen, setIsAccessOpen] = useState(false)

  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Embrace the Future of AI-Driven Engagement
          </h2>
          <p className="mt-4 text-xl opacity-90">
            Take your online interactions to the next level with FlirtAgent's advanced AI capabilities.
          </p>
          <div className="mt-8">
            <AnimatedButton
              size="lg"
              variant="default"
              onClick={() => setIsAccessOpen(true)}
              className="font-medium"
            >
              Request Access
            </AnimatedButton>
          </div>
        </motion.div>
      </div>

      <RequestAccessDialog open={isAccessOpen} onOpenChange={setIsAccessOpen} />
    </section>
  )
}
