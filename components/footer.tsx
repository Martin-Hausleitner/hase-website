"use client"

import Link from "next/link"
import { useState } from "react"
import LoginDialog from "@/components/login-dialog"
import RequestDemoDialog from "@/components/request-demo-dialog"
import FlirtFlowLogo from "@/components/flirtflow-logo"

export default function Footer() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FlirtFlowLogo className="text-primary h-8 w-8" />
              <span className="font-bold text-xl">FlirtAgent</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Revolutionizing digital engagement through AI that drives real connections, fosters growth, and
              streamlines interactions.
            </p>
          </div>

          {/* Center Column */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Docs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsDemoOpen(true)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-end justify-start md:justify-end">
            <p className="text-sm text-muted-foreground">© 2025 FlirtAgent. All rights reserved.</p>
          </div>
        </div>
      </div>
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <RequestDemoDialog open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </footer>
  )
}
