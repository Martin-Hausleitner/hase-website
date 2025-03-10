"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Client, Databases, ID } from "appwrite"
import dynamic from "next/dynamic"

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false })

interface RequestDemoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("67cb075100288857cc02")

const databases = new Databases(client)

export default function RequestDemoDialog({ open, onOpenChange }: RequestDemoDialogProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [option, setOption] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await databases.createDocument("67cb076b00365e81d70e", "67cb077600144b746d2c", ID.unique(), {
        name,
        email,
        option,
      })

      console.log(response)

      toast({
        title: "Access requested",
        description: "We've received your access request and will contact you soon.",
      })

      setShowConfetti(true)

      // Reset form
      setName("")
      setEmail("")
      setOption("")

      // Close dialog after a delay
      setTimeout(() => {
        onOpenChange(false)
        setShowConfetti(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting request:", error)
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getWindowSize = useCallback(() => {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window
      return { width, height }
    }
    return { width: 0, height: 0 }
  }, [])

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getWindowSize])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Request Access</DialogTitle>
          <DialogDescription>Fill out the form below to request access to FlirtAgent.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="option">Option</Label>
            <Select value={option} onValueChange={setOption} required>
              <SelectTrigger>
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
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Request Access
          </Button>
        </form>
        {showConfetti && (
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.2}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
