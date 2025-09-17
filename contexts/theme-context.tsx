"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { lightTheme, type ThemeType } from "@/styles/themes/light-theme"
import { darkTheme } from "@/styles/themes/dark-theme"

interface ThemeContextType {
  theme: ThemeType
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", isDark ? "dark" : "light")
      console.log(`[v0] Theme switched to: ${isDark ? "dark" : "light"}`)
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    console.log(`[v0] Toggling theme from ${isDark ? "dark" : "light"} to ${isDark ? "light" : "dark"}`)
    setIsDark(!isDark)
  }

  const theme = isDark ? darkTheme : lightTheme

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
