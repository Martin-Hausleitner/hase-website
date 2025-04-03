"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import Image from "next/image"

interface Message {
  sender: string
  text: string
  isPatrik: boolean
  price?: number
  image?: string
  id?: string
}

const messageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
}

function MessageBubble({
  message,
  isImageBlurred,
  setIsImageBlurred,
}: {
  message: Message
  isImageBlurred: boolean
  setIsImageBlurred: (value: boolean) => void
}) {
  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={messageVariants}
      className={`flex ${message.isPatrik ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-3xl px-4 py-3 ${
          message.isPatrik ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted rounded-bl-sm"
        }`}
      >
        <div className={`text-xs mb-1 font-semibold ${!message.isPatrik ? "text-black" : ""}`}>{message.sender}</div>
        {message.image && (
          <div className="mb-2">
            <div onClick={() => setIsImageBlurred(false)} className="cursor-pointer relative">
              <Image
                src={
                  isImageBlurred
                    ? message.image
                    : "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1000&h=563&crop=1"
                }
                alt="Preview"
                width={200}
                height={150}
                className={`w-full h-36 object-cover rounded-lg ${isImageBlurred ? "blur-xl" : ""}`}
              />
              {isImageBlurred && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
                    {message.price}$ Click to view
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className={`text-sm ${message.isPatrik ? "text-primary-foreground" : "text-foreground"}`}>
          {message.text}
        </div>
      </div>
    </motion.div>
  )
}

interface ChatDemoProps {
  onRequestAccess: () => void
}

function ChatDemo({ onRequestAccess }: ChatDemoProps) {
  const [isImageBlurred, setIsImageBlurred] = useState(true)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])

  // All messages data
  const allMessages: Message[] = [
    {
      sender: "Patrik",
      text: "hey, I discovered you on instagram and I really like you.",
      isPatrik: true,
      id: "1",
    },
    {
      sender: "FlirtAgent",
      text: "how sweet of you to find me! Can I ask what you like most about me? 😉",
      isPatrik: false,
      id: "2",
    },
    {
      sender: "Patrik",
      text: "I think your ass is amazing I’d love to clap it sometime.",
      isPatrik: true,
      id: "3",
    },
    {
      sender: "FlirtAgent",
      text: "Oh, you’ve got good taste! But I'm very picky about who gets to clap me like that. Show me what you’ve got babe. 😏",
      isPatrik: false,
      id: "4",
    },
    {
      sender: "Patrik",
      text: "I’ve got a lot to offer, you’ll see as soon as I'm home.",
      isPatrik: true,
      id: "5",
    },
    {
      sender: "FlirtAgent",
      text: "Now I’m really curious about what you can do, but don’t keep me waiting too long babe or I might just tease the patience out of you. 😈",
      isPatrik: false,
      id: "6",
    },
    {
      sender: "Patrik",
      text: "What are you doing right now, cutie?",
      isPatrik: true,
      id: "7",
    },
    {
      sender: "FlirtAgent",
      text: "Just finished a little workout to stay fit, but now I’m in the mood for something else. Should I show you which lingerie I am wearing today? 💋",
      isPatrik: false,
      id: "8",
    },
    {
      sender: "Patrik",
      text: "Yes, show me more!! I can only afford $7 today please, I really want to see itttt!",
      isPatrik: true,
      id: "9",
    },
    {
      sender: "FlirtAgent",
      text: "Hmm, just for you I’ll make an exception today. But only because you’re begging so sweetly. 😏 Here’s your chance to see the hot lingerie set for your $7. And after that, I want to see just how much you like it. 😈",
      isPatrik: false,
      price: 7,
      image: "/placeholder.svg?height=150&width=200",
      id: "10",
    },
    {
      sender: "Patrik",
      text: "Wow thank you! When I have more money next month I’ll check out everything from you. Thanks!",
      isPatrik: true,
      id: "11",
    },
  ]

  // Effect to add messages one by one with a delay
  useEffect(() => {
    if (messages.length < allMessages.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, allMessages[messages.length]])
      }, 1000) // 1 second delay between messages

      return () => clearTimeout(timer)
    }
  }, [messages])

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollContainer = chatContainerRef.current
      scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className="w-full max-w-lg h-[600px] bg-transparent rounded-xl flex flex-col">
      <motion.div
        className="flex-1 overflow-y-auto px-4 pt-4 scrollbar-hide hover:scrollbar-show"
        ref={chatContainerRef}
        style={{
          height: "calc(100% - 80px)",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isImageBlurred={isImageBlurred}
                setIsImageBlurred={setIsImageBlurred}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="p-4">
        <div className="flex gap-2">
          <div
            className="flex-1 rounded-full px-4 py-2 border border-white/20 text-white/70 bg-secondary/50 cursor-pointer hover:border-primary/50 transition-colors"
            onClick={onRequestAccess}
          >
            Write a message...
          </div>
          <AnimatedButton size="icon" className="rounded-full" onClick={onRequestAccess}>
            <Send className="h-4 w-4" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

export default ChatDemo
