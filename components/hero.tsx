"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/animated-button"
import { motion } from "framer-motion"
import ChatDemo from "@/components/chat-demo"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Head from "next/head"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            className="space-y-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Badge variant="outline" className="mb-2 bg-primary/20 text-white border-primary">
                Early Access
              </Badge>
            </motion.div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Fully Autonomous AI Agent That <span className="text-primary">Replaces Human Chatters</span>
            </h1>
            <motion.p
              className="text-white/80 md:text-xl max-w-[600px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Say goodbye to human chatters. FlirtAgent autonomously manages all fan interactions, delivering flirty,
              revenue-boosting chats 24/7 with AI that feels completely human.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/request-access">
                  <AnimatedButton size="lg">
                    Request Access
                  </AnimatedButton>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="lg:mt-0 mt-8">
            <ChatDemo onRequestAccess={() => window.location.href = '/request-access'} />
          </div>
        </div>
      </div>
    </section>
  )
}