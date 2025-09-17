"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"  


const languages = [
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "Python", color: "bg-blue-500" },
  { name: "Java", color: "bg-red-500" },
  { name: "C++", color: "bg-blue-600" },
  { name: "C#", color: "bg-purple-500" },
  { name: "Go", color: "bg-cyan-500" },
  { name: "C", color: "bg-gray-500" },
  { name: "Rust", color: "bg-orange-600" },
  { name: "TypeScript", color: "bg-blue-400" },
  { name: "PHP", color: "bg-indigo-500" },
  { name: "Ruby", color: "bg-red-600" },
  { name: "Swift", color: "bg-orange-500" },
  { name: "Kotlin", color: "bg-purple-600" },
]

interface LanguageSelectorProps {
  sourceLanguage: string
  targetLanguage: string
  sourceCode: string
  isConverting: boolean
  onSourceLanguageChange: (value: string) => void
  onTargetLanguageChange: (value: string) => void
  onConvert: () => void
}

export default function LanguageSelector({
  sourceLanguage,
  targetLanguage,
  sourceCode,
  isConverting,
  onSourceLanguageChange,
  onTargetLanguageChange,
  onConvert,
}: LanguageSelectorProps) {
  const { theme } = useTheme()
  return (
    <div className="flex items-center justify-center gap-6 mb-6">
      <div className="flex flex-col items-start">
        <label className={`text-sm font-medium mb-2 ${theme.text.label}`}>From</label>

        <Select value={sourceLanguage} onValueChange={onSourceLanguageChange}>
          <SelectTrigger className="w-64 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
            <SelectValue placeholder="Select source language" />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            sideOffset={4}
            align="start"
            avoidCollisions={false}
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            {languages.map((lang) => (
              <SelectItem
                key={lang.name}
                value={lang.name}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                  {lang.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-6 w-10 h-10 rounded-md flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-blue-400/30">
        <ArrowRight className="w-4 h-4" />
      </div>

      <div className="flex flex-col items-start">
        <label className={`text-sm font-medium mb-2 ${theme.text.label}`}>To</label>
        <Select value={targetLanguage} onValueChange={onTargetLanguageChange}>
          <SelectTrigger className="w-64 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
            <SelectValue placeholder="Select target language" />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            sideOffset={4}
            align="start"
            avoidCollisions={false}
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            {languages.map((lang) => (
              <SelectItem
                key={lang.name}
                value={lang.name}
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                  {lang.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
