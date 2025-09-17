"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isDark ? "bg-gray-700" : "bg-gray-200"}
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div
        className={`
          flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        <Sun
          className={`h-3 w-3 text-yellow-500 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}
        />
        <Moon
          className={`absolute h-3 w-3 text-blue-600 transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </button>
  )
}
