"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  // Verwende einen State, um zu verfolgen, ob wir im Browser sind
  const [isBrowser, setIsBrowser] = useState(false)

  // Setze isBrowser auf true, wenn die Komponente im Browser gemountet wird
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // Rendere eine einfache Version für SSR
  if (!isBrowser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8">Die angeforderte Seite konnte nicht gefunden werden.</p>
      </div>
    )
  }

  // Vollständige Version für Client-Side Rendering
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
      <p className="text-muted-foreground mb-8">Die angeforderte Seite konnte nicht gefunden werden.</p>
      <Link href="/">
        <Button>Zurück zur Startseite</Button>
      </Link>
    </div>
  )
}

