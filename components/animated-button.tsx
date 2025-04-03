"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
