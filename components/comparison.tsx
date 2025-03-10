"use client"

import { motion } from "framer-motion"
import { Check, X, Minus, AlertCircle } from "lucide-react"

export default function Comparison() {
  const features = [
    { name: "Supports video, photo, and audio recognition", flirtAgent: true, others: "partial", human: true },
    { name: "24/7 Availability", flirtAgent: true, others: true, human: false },
    { name: "Long Term Memory", flirtAgent: true, others: true, human: "partial" },
    { name: "No Chatting Errors", flirtAgent: true, others: false, human: "n/a" },
    { name: "Never Takes Days Off", flirtAgent: true, others: true, human: false },
    { name: "Speaks Over 100 Languages", flirtAgent: true, others: "partial", human: false },
    { name: "No Delayed Replies", flirtAgent: true, others: true, human: false },
    { name: "No Time-consuming Management", flirtAgent: true, others: true, human: false },
    { name: "Avoids Inconsistent Responses", flirtAgent: true, others: "partial", human: "partial" },
    { name: "Avoids Content Duplication", flirtAgent: true, others: "partial", human: "partial" },
    { name: "Media Selection Agent", flirtAgent: true, others: true, human: false },
    { name: "Perfect Emoji Selection", flirtAgent: true, others: false, human: "partial" },
    { name: "Fully Complies with OnlyFans Rules", flirtAgent: true, others: true, human: "partial" },
    { name: "Scalability", flirtAgent: true, others: true, human: false },
    { name: "API Functionality", flirtAgent: true, others: true, human: "n/a" },
    { name: "Emotional Intelligence", flirtAgent: true, others: true, human: true },
    { name: "AI Jailbreak Safety", flirtAgent: true, others: false, human: true },
  ]

  const renderStatus = (status: boolean | string) => {
    if (status === true) {
      return <Check className="h-5 w-5 text-green-500" />
    } else if (status === false) {
      return <X className="h-5 w-5 text-red-500" />
    } else if (status === "partial") {
      return <AlertCircle className="h-5 w-5 text-amber-500" />
    } else {
      return <Minus className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features Comparison</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            See how FlirtAgent outperforms competitors and human chatters in key areas.
          </p>
        </div>

        <div className="overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <motion.tr
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-transparent border-b border-border"
              >
                <th className="px-6 py-3 text-left text-sm font-semibold">Feature</th>
                <th className="px-6 py-3 text-center text-sm font-semibold bg-muted/30">FlirtAgent</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Others</th>
                <th className="px-6 py-3 text-center text-sm font-semibold">Human Chatter</th>
              </motion.tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className="border-b border-border"
                >
                  <td className="px-6 py-4 text-sm font-medium">{feature.name}</td>
                  <td className="px-6 py-4 text-center bg-muted/30">
                    <div className="flex justify-center items-center">{renderStatus(feature.flirtAgent)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center items-center">{renderStatus(feature.others)}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center items-center">{renderStatus(feature.human)}</div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="inline-flex items-center mr-4">
              <Check className="h-4 w-4 text-green-500 mr-1" /> Available
            </span>
            <span className="inline-flex items-center mr-4">
              <X className="h-4 w-4 text-red-500 mr-1" /> Not Available
            </span>
            <span className="inline-flex items-center mr-4">
              <AlertCircle className="h-4 w-4 text-amber-500 mr-1" /> Partially Available
            </span>
            <span className="inline-flex items-center">
              <Minus className="h-4 w-4 text-muted-foreground mr-1" /> Not Applicable
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
