"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AnimatedBeamProps {
  children: React.ReactNode
}

export function AnimatedBeam({ children }: AnimatedBeamProps) {
  return (
    <motion.div
      className="relative overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(123,97,255,0.2) 0%, rgba(123,97,255,0) 50%, rgba(123,97,255,0.2) 100%)",
        }}
        animate={{
          x: ["0%", "100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 5,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

