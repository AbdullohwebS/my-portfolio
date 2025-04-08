"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-purple-50/30 to-blue-100/30 dark:from-purple-900/10 dark:to-blue-900/10 blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-blue-50/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 blur-3xl" />
        </div>
        {children}
      </motion.div>
    </ThemeProvider>
  )
}

