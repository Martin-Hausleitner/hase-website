"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Brain,
  Camera,
  Globe2,
  Settings,
  Heart,
  History,
  ImageIcon,
  RefreshCw,
  Server,
  Code,
  Shield,
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "100% Automated",
      description: "The agent operates and enhances its capabilities fully autonomously.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Multi-Model AI Agent",
      description: "Employs advanced reasoning along with vision, audio, and video models to handle diverse inputs.",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Image, Video, and Audio Recognition",
      description: "Accurately detects and processes data from multiple media types.",
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Over 100 Languages",
      description: "Communicates fluently worldwide, expanding global reach.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Fine-Tuning",
      description: "Easily customizable personality with various sales strategies.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Flirty Chatting",
      description: "Emotionally engaging and captivating conversational style.",
    },
    {
      icon: <History className="h-8 w-8" />,
      title: "Complete Chat History",
      description: "Remembers every interaction alongside knowledge bases for optimal decision-making.",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Media Selecting Agent",
      description: "Automatically chooses the best media for fans.",
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Media Sync Engine",
      description: "Keeps all media perfectly synchronized.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Serverless Infrastructure",
      description: "Fail-safe architecture with 99.99% uptime, scalable to millions of agents.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "API Interface",
      description: "Fully integrated, end-to-end interface that can be embedded anywhere.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "AI Jailbreak Proof",
      description: "Never reveals it's an AI and remains secure.",
    },
  ]

  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI creates authentic, impactful conversations that reflect your model.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-lg border p-6 text-left h-full flex flex-col cursor-pointer shadow-sm"
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10"
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <div className="text-primary">{feature.icon}</div>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

