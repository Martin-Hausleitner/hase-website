"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Client, Databases, ID } from "appwrite"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67cb075100288857cc02")

const databases = new Databases(client)

export default function RequestAccessPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [option, setOption] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await databases.createDocument(
        "67cb076b00365e81d70e",
        "67cb077600144b746d2c",
        ID.unique(),
        { name, email, option }
      )

      toast({
        title: "Access requested",
        description: "We've received your access request and will contact you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setOption("")
    } catch (error) {
      console.error("Error submitting request:", error)
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen bg-secondary">
      {/* Left side - Request Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground">Request Access</h2>
            <p className="text-sm text-secondary-foreground/60">Fill out the form below to request access to FlirtAgent</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-secondary-foreground">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-secondary-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="option" className="text-secondary-foreground">Option</Label>
              <Select value={option} onValueChange={setOption} required>
                <SelectTrigger className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="model">Model</SelectItem>
                  <SelectItem value="management">Management Platforms</SelectItem>
                  <SelectItem value="creator">Content Creator Platform</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Request Access
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