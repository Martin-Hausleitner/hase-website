"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Bot, Brain, Camera, Globe2, Settings, Heart, History, ImageIcon, RefreshCw, Server, Code, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Features() {
  const features = [
    {
      id: "automated",
      icon: <Bot className="h-8 w-8" />,
      title: "100% Automated",
      description: "The agent operates and enhances its capabilities fully autonomously.",
    },
    {
      id: "multi-model",
      icon: <Brain className="h-8 w-8" />,
      title: "Multi-Model AI Agent",
      description: "Employs advanced reasoning along with vision, audio, and video models to handle diverse inputs.",
    },
    {
      id: "media-recognition",
      icon: <Camera className="h-8 w-8" />,
      title: "Image, Video, and Audio Recognition",
      description: "Accurately detects and processes data from multiple media types.",
    },
    {
      id: "global-languages",
      icon: <Globe2 className="h-8 w-8" />,
      title: "Over 100 Languages",
      description: "Communicates fluently worldwide, expanding global reach.",
    },
    {
      id: "fine-tuning",
      icon: <Settings className="h-8 w-8" />,
      title: "Fine-Tuning",
      description: "Easily customizable personality with various sales strategies.",
    },
    {
      id: "flirty-chatting",
      icon: <Heart className="h-8 w-8" />,
      title: "Flirty Chatting",
      description: "Emotionally engaging and captivating conversational style.",
    },
    {
      id: "chat-history",
      icon: <History className="h-8 w-8" />,
      title: "Complete Chat History",
      description: "Remembers every interaction alongside knowledge bases for optimal decision-making.",
    },
    {
      id: "media-selection",
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Media Selecting Agent",
      description: "Automatically chooses the best media for fans.",
    },
    {
      id: "media-sync",
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Media Sync Engine",
      description: "Keeps all media perfectly synchronized.",
    },
    {
      id: "serverless",
      icon: <Server className="h-8 w-8" />,
      title: "Serverless Infrastructure",
      description: "Fail-safe architecture with 99.99% uptime, scalable to millions of agents.",
    },
    {
      id: "api-interface",
      icon: <Code className="h-8 w-8" />,
      title: "API Interface",
      description: "Fully integrated, end-to-end interface that can be embedded anywhere.",
    },
    {
      id: "jailbreak-safety",
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
            <FeatureCard
              key={index}
              index={index}
              id={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ 
  index, 
  id,
  icon, 
  title, 
  description 
}: { 
  index: number
  id: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth mouse values with spring
  const springConfig = { damping: 25, stiffness: 300 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  // Update mouse position relative to the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  const handleCardClick = () => {
    setIsClicked(true)
    // Navigate after animation completes
    setTimeout(() => {
      router.push(`/features/${id}`)
    }, 300)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.97 }}
      animate={
        isClicked 
          ? { 
              scale: [1, 1.02, 0.98],
              transition: { duration: 0.3 }
            } 
          : {}
      }
      className="bg-white rounded-lg border p-6 text-left h-full flex flex-col relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
    >
      {/* The icon container remains stable during animations */}
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 overflow-hidden will-change-transform preserve-3d">
        <motion.div 
          className="text-primary"
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
      
      {/* Hover effect overlay with cursor-following button */}
      <motion.div 
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
      >
        {isHovered && (
          <motion.div
            className="absolute flex items-center justify-center"
            style={{ 
              left: smoothMouseX,
              top: smoothMouseY,
              x: "-50%", 
              y: "-50%",
              pointerEvents: "none"
            }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
            >
              Learn More <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}