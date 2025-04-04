import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://flirtagent.ai"),
  title: {
    default: "FlirtAgent - AI-Powered Chat Automation for Content Creators",
    template: "%s | FlirtAgent"
  },
  description:
    "Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7. Increase engagement and revenue with 24/7 AI chat automation.",
  keywords: [
    "AI chat",
    "content creator",
    "chat automation",
    "fan engagement",
    "revenue boost",
    "AI agent",
    "flirty chats",
    "OnlyFans automation",
    "creator economy",
    "chat management",
    "automated AI agent",
    "content creator platform"
  ],
  authors: [{ name: "FlirtAgent Team" }],
  creator: "FlirtAgent",
  publisher: "FlirtAgent",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flirtagent.ai",
    title: "FlirtAgent - AI-Powered Chat Automation for Content Creators",
    description:
      "Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7.",
    siteName: "FlirtAgent",
    images: [
      {
        url: "/Social Media.png",
        width: 1200,
        height: 630,
        alt: "FlirtAgent - AI-Powered Chat Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlirtAgent - AI-Powered Chat Automation",
    description:
      "Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7.",
    images: ["/Social Media.png"],
    creator: "@flirtagent",
    site: "@flirtagent",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/FlirtAgent Icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#6046C8",
  verification: {
    google: "google-site-verification=your_verification_code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        {/* Hotjar Tracking Code for Site 5330056 (name missing) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5330056,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}