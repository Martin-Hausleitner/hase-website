"use client"

import { useEffect, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Head from "next/head"

type Feature = {
  id: string
  title: string
  icon: string
  description: string
  longDescription: string
  benefits: string[]
  seoDescription: string
  seoKeywords: string[]
}

type FeaturesData = {
  features: Feature[]
}

export default function FeaturePage({ params }: { params: { feature: string } }) {
  const [featureData, setFeatureData] = useState<Feature | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedFeatures, setRelatedFeatures] = useState<Feature[]>([])
  const router = useRouter()

  useEffect(() => {
    async function loadFeatureData() {
      try {
        const response = await fetch('/features.json')
        const data: FeaturesData = await response.json()
        
        const feature = data.features.find(f => f.id === params.feature)
        
        if (feature) {
          setFeatureData(feature)
          
          // Find 3 related features (excluding current one)
          const related = data.features
            .filter(f => f.id !== params.feature)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            
          setRelatedFeatures(related)
          setIsLoading(false)
        } else {
          notFound()
        }
      } catch (error) {
        console.error("Error loading feature data:", error)
        notFound()
      }
    }
    
    loadFeatureData()
  }, [params.feature])

  // SEO optimization
  useEffect(() => {
    if (featureData) {
      // Update document title
      document.title = `${featureData.title} | FlirtAgent`
      
      // Add meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', featureData.seoDescription)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = featureData.seoDescription
        document.head.appendChild(meta)
      }
      
      // Add keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', featureData.seoKeywords.join(', '))
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = featureData.seoKeywords.join(', ')
        document.head.appendChild(meta)
      }

      // Add canonical URL
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://flirtagent.ai/features/${featureData.id}`)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = `https://flirtagent.ai/features/${featureData.id}`
        document.head.appendChild(link)
      }
    }
  }, [featureData])

  if (isLoading) {
    return (
      <div className="container max-w-4xl py-20 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <div className="animate-pulse w-3/4 h-8 bg-muted rounded-md mb-4"></div>
          <div className="animate-pulse w-full h-4 bg-muted rounded-md mb-2"></div>
          <div className="animate-pulse w-full h-4 bg-muted rounded-md mb-2"></div>
          <div className="animate-pulse w-5/6 h-4 bg-muted rounded-md"></div>
        </div>
      </div>
    )
  }

  if (!featureData) {
    return notFound()
  }

  return (
    <>
      <div className="py-12 bg-secondary text-secondary-foreground">
        <div className="container max-w-4xl px-4 md:px-6">
          <Link 
            href="/#features"
            className="inline-flex items-center text-secondary-foreground/80 hover:text-white transition-colors duration-200 mb-6 group"
          >
            <motion.span 
              className="mr-2 inline-flex"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[-2px]" />
            </motion.span>
            <span>Back to all features</span>
          </Link>

          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {featureData.title}
          </motion.h1>

          <motion.p 
            className="text-xl text-secondary-foreground/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {featureData.description}
          </motion.p>
        </div>
      </div>

      <div className="container max-w-4xl py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                {featureData.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
              <ul className="space-y-2 mb-8">
                {featureData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Structured data for this specific feature */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": `FlirtAgent - ${featureData.title}`,
                "description": featureData.seoDescription,
                "brand": {
                  "@type": "Brand",
                  "name": "FlirtAgent"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/ComingSoon"
                }
              })
            }} />
          </div>

          <motion.div
            className="rounded-lg border p-6 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-medium mb-4">Ready to experience FlirtAgent?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get access to all features including {featureData.title} and start automating your fan engagement today.
            </p>
            <Link href="/request-access">
              <Button className="w-full">Request Access</Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-4xl py-16 px-4 md:px-6 border-t">
        <h2 className="text-2xl font-bold mb-8 text-center">Other Features You Might Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white rounded-lg border p-5 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push(`/features/${feature.id}`)}
            >
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <div className="mt-4 text-primary text-sm font-medium flex items-center">
                Learn more 
                <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}