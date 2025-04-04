"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Client, Databases, ID } from "appwrite"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67cb075100288857cc02")

const databases = new Databases(client)

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [option, setOption] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await databases.createDocument(
        "67effc900026c72f94ab", // Using the specified collection ID
        "67effc900026c72f94ab", // Using the same ID for the collection
        ID.unique(),
        { name, email, option, message }
      )

      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setOption("")
      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Back link (mobile only) */}
      <div className="lg:hidden bg-secondary p-4">
        <Link href="/" className="flex items-center text-white/80 hover:text-white mb-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to home</span>
        </Link>
      </div>
      
      <div className="flex flex-col-reverse lg:flex-row min-h-[calc(100vh-65px)]">
        {/* Mobile Form - Shows only on mobile */}
        <div className="lg:hidden w-full bg-secondary p-4 sm:p-6 pb-12">
          <div className="w-full max-w-md mx-auto space-y-6">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">Contact Us</h1>
              <p className="mt-3 text-white/80 text-sm sm:text-base">
                Have a question or want to learn more about FlirtAgent? We're here to help.
              </p>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="space-y-2">
                <Label htmlFor="mobile-name" className="text-white">Name</Label>
                <Input
                  id="mobile-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary/50 h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile-email" className="text-white">Email</Label>
                <Input
                  id="mobile-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary/50 h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile-option" className="text-white">Option</Label>
                <Select value={option} onValueChange={setOption} required>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white h-12">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="model">Model</SelectItem>
                    <SelectItem value="management">Management Platforms</SelectItem>
                    <SelectItem value="creator">Content Creator Platform</SelectItem>
                    <SelectItem value="question">General Question</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile-message" className="text-white">Message</Label>
                <Textarea
                  id="mobile-message"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-24 focus-visible:ring-primary/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/20 h-12 text-base" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Left side - Background image with logo and social links */}
        <div 
          className="w-full lg:w-1/2 relative flex items-start lg:items-center justify-start p-4 sm:p-6 md:p-8 lg:p-10"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "50vh"
          }}
        >
          {/* Overlay for better visibility */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* Back link (desktop only) */}
          <div className="absolute top-6 left-6 z-20 hidden lg:block">
            <Link href="/" className="flex items-center text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to home</span>
            </Link>
          </div>
          
          <div className="relative z-10 flex flex-col items-start justify-center text-left w-full max-w-lg mx-auto lg:mx-0 pt-10 lg:pt-0">
            <img 
              src="/FlirtAgent Logo White.svg" 
              alt="FlirtAgent" 
              className="w-2/3 max-w-xs mb-6"
            />
            
            <p className="text-white text-base sm:text-lg mb-8 lg:mb-12">
              Revolutionizing digital engagement through AI that drives real connections, fosters growth, and streamlines interactions.
            </p>
            
            <div className="space-y-6 text-left">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
                <a 
                  href="mailto:office@flirtagent.ai" 
                  className="text-white text-lg font-medium hover:underline"
                >
                  office@flirtagent.ai
                </a>
              </div>
              
              <div className="flex space-x-6 sm:space-x-8">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="mt-2 text-xs sm:text-sm text-white/70">Instagram</span>
                </a>
                
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="mt-2 text-xs sm:text-sm text-white/70">X</span>
                </a>
                
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M9 4.323v13.676c-1.217-.144-2.385-.399-3.494-.763-1.228-.404-2.055-1.541-2.055-2.829 0-.33.055-.647.156-.945.395-1.159 1.462-2.424 2.468-3.224.866-.688 1.954-1.265 2.925-1.613v-4.302zm11.418 2.823c-.574 0-1.128-.099-1.641-.283-.859-.307-1.596-.842-2.152-1.522-.556-.68-.912-1.493-1.028-2.334-.048-.344-.072-.698-.072-1.057h-3.93v11.884c-.161 1.521-1.011 3.178-2.171 3.925-.811.523-1.753.787-2.694.787-1.282 0-2.461-.475-3.361-1.259-1.378-1.199-1.826-2.831-1.557-4.543.335-2.132 2.129-3.968 4.304-4.455.545-.122 1.121-.183 1.711-.183.454 0 .897.041 1.327.124v-3.951c-.498-.092-1.008-.14-1.53-.14-1.017 0-1.992.169-2.903.476-1.525.512-2.883 1.373-3.994 2.484-1.072 1.073-1.905 2.391-2.41 3.847-.31.903-.473 1.865-.473 2.86 0 1.103.215 2.16.604 3.127.785 1.946 2.202 3.542 3.992 4.468 1.797.928 3.87 1.452 6.063 1.452 1.225 0 2.413-.16 3.544-.458 1.46-.385 2.81-1.027 3.969-1.884 1.145-.847 2.146-1.917 2.933-3.145.769-1.207 1.333-2.557 1.644-4.006.167-.772.255-1.578.255-2.409v-4.907c1.161.679 2.507 1.07 3.951 1.07v-3.928c-.818 0-1.604-.137-2.338-.388z"/>
                    </svg>
                  </div>
                  <span className="mt-2 text-xs sm:text-sm text-white/70">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form with dots pattern (desktop only) */}
        <div className="hidden lg:block w-1/2 bg-secondary relative overflow-hidden">
          {/* Dots pattern background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div key={`row-${i}`} className="flex justify-center">
                {[...Array(20)].map((_, j) => (
                  <div 
                    key={`dot-${i}-${j}`} 
                    className="w-3 h-3 m-6 rounded-full bg-white/10"
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Form container */}
          <div className="relative z-10 flex items-center justify-center min-h-full p-8">
            <div className="w-full max-w-md space-y-8">
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Contact Us</h1>
                <p className="mt-3 text-white/80">
                  Have a question or want to learn more about FlirtAgent? We're here to help.
                </p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="option" className="text-white">Option</Label>
                  <Select value={option} onValueChange={setOption} required>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agency">Agency</SelectItem>
                      <SelectItem value="model">Model</SelectItem>
                      <SelectItem value="management">Management Platforms</SelectItem>
                      <SelectItem value="creator">Content Creator Platform</SelectItem>
                      <SelectItem value="question">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32 focus-visible:ring-primary/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/20" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}