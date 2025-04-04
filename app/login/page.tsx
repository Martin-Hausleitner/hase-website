"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Login attempted",
      description: "This is a demo. In a real application, this would authenticate you.",
    })
  }

  return (
    <div className="flex min-h-screen bg-secondary">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground">Welcome back</h2>
            <p className="text-sm text-secondary-foreground/60">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-secondary-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-secondary-foreground">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Animated Background */}
      <div className="hidden lg:block w-1/2 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="flex gap-8 absolute whitespace-nowrap"
              style={{
                top: `${rowIndex * 120}px`,
                left: 0,
                width: "200%"
              }}
              animate={{
                x: rowIndex % 2 === 0 ? [0, "-50%"] : ["-50%", 0]
              }}
              transition={{
                duration: 20 + (rowIndex * 2),
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[...Array(20)].map((_, i) => (
                <div
                  key={`logo-${rowIndex}-${i}`}
                  className="w-32 h-32 flex items-center justify-center bg-white"
                >
                  <img
                    src="/FlirtAgent Logo Black.svg"
                    alt=""
                    className="h-12 opacity-20"
                    style={{
                      transform: "none"
                    }}
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}