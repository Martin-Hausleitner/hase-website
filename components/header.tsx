"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"
import { Menu, X } from "lucide-react"
import LoginDialog from "@/components/login-dialog"
import RequestDemoDialog from "@/components/request-demo-dialog"
import FlirtFlowLogo from "@/components/flirtflow-logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRequestDemoOpen, setIsRequestDemoOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Comparison", href: "#comparison" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()

    // Open request demo dialog for Contact link
    if (href === "#contact") {
      setIsRequestDemoOpen(true)
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Close mobile menu if open
    setIsMenuOpen(false)

    // Update URL without triggering a page reload
    router.push(href, { scroll: false })
  }

  useEffect(() => {
    // Handle initial load with hash in URL
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-secondary-foreground backdrop-blur supports-[backdrop-filter]:bg-secondary/95">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={(e) => handleScroll(e, "/")}>
            <img src="/FlirtAgent Logo White.svg" alt="FlirtAgent" className="h-8" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary text-secondary-foreground"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <AnimatedButton variant="default" onClick={() => setIsLoginOpen(true)} className="hidden md:inline-flex">
            Login
          </AnimatedButton>

          <AnimatedButton variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </AnimatedButton>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary text-secondary-foreground"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <AnimatedButton
              variant="default"
              onClick={() => {
                setIsMenuOpen(false)
                setIsLoginOpen(true)
              }}
              className="w-full"
            >
              Login
            </AnimatedButton>
          </div>
        </div>
      )}

      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <RequestDemoDialog open={isRequestDemoOpen} onOpenChange={setIsRequestDemoOpen} />
    </header>
  )
}
