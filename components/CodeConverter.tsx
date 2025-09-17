"use client"

import { useState } from "react"
import LanguageSelector from "@/components/language-selector"
import SourceCodeEditor from "@/components/source-code-editor"
import ConvertedCodeEditor from "@/components/converted-code-editor"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { Button } from "@/components/ui/button"
import { Sparkles, Code, Zap, AlertCircle, ArrowLeftRight, ArrowLeft, ExternalLink, Info } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"


export default function CodeConverter() {
  const { theme } = useTheme()
  

  const [sourceLanguage, setSourceLanguage] = useState("")
  const [targetLanguage, setTargetLanguage] = useState("")
  const [sourceCode, setSourceCode] = useState("")
  const [convertedCode, setConvertedCode] = useState("")
  const [isConverting, setIsConverting] = useState(false)
  const [error, setError] = useState("")
  const [showSetupScreen, setShowSetupScreen] = useState(false)

  const handleConvert = async () => {
    if (!sourceLanguage || !targetLanguage || !sourceCode.trim()) {
      return
    }

    setIsConverting(true)
    setError("")
    setConvertedCode("")

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceLanguage,
          targetLanguage,
          sourceCode,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.error?.includes("API key") || data.error?.includes("GROQ_API_KEY")) {
          setShowSetupScreen(true)
          return
        }
        throw new Error(data.error || "Conversion failed")
      }

      setConvertedCode(data.convertedCode)
    } catch (error) {
      console.error("Error converting code:", error)
      setError(error instanceof Error ? error.message : "Failed to convert code. Please try again.")
    } finally {
      setIsConverting(false)
    }
  }

  if (showSetupScreen) {
    return (
      <div className={`min-h-screen ${theme.background.primary} transition-colors`}>
        <div className="container mx-auto px-4 pt-4 pb-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-600 rounded-2xl p-4 mr-4">
                <div className="text-white text-2xl font-mono font-bold">{"</>"}</div>
              </div>
              <h1 className={`text-5xl font-bold ${theme.text.primary}`}>AI Code Converter</h1>
            </div>
          </div>

          {/* API Key Required Alert */}
          <div className="mb-8">
            <div className={`${theme.background.alert.warning} border ${theme.border.alert.warning} rounded-xl p-4`}>
              <div className="flex items-center">
                <Info className={`w-5 h-5 ${theme.icon.alert.warning} mr-3 flex-shrink-0`} />
                <div>
                  <h3 className={`text-sm font-medium ${theme.text.alert.warning}`}>API Key Required</h3>
                  <p className={`text-sm ${theme.text.alert.warningSecondary} mt-1`}>
                    Please add your Groq API key to use the AI code converter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Setup */}
          <div className={`${theme.background.setup} rounded-2xl p-8 mb-8`}>
            <h2 className="text-2xl font-bold text-white mb-6">Quick Setup:</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  1
                </div>
                <div className={theme.text.setup}>
                  <span>Get a free API key from </span>
                  <a
                    href="https://console.groq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                  >
                    Groq Console
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  2
                </div>
                <div className={theme.text.setup}>
                  <span>Create a </span>
                  <code className="bg-gray-600 px-2 py-1 rounded text-sm">.env.local</code>
                  <span> file in your project root</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  3
                </div>
                <div className={theme.text.setup}>
                  <span>Add: </span>
                  <code className="bg-gray-600 px-2 py-1 rounded text-sm">GROQ_API_KEY=your_key_here</code>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  4
                </div>
                <div className={theme.text.setup}>Restart your development server</div>
              </div>
            </div>
          </div>

          {/* Back to Converter Button */}
          <div className="text-center">
            <Button
              onClick={() => setShowSetupScreen(false)}
              variant="outline"
              className={`${theme.background.buttonSecondary} ${theme.text.buttonSecondary} border ${theme.border.secondary} hover:${theme.background.buttonSecondary}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Converter
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme.background.primary} transition-colors`}>
      <div className="container mx-auto px-4 pt-4 pb-12 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-2xl p-4 mr-4">
                <div className="text-white text-2xl font-mono font-bold">{"</>"}</div>
              </div>
              <h1 className={`text-5xl font-bold ${theme.text.primary}`}>
                AI Code Converter <span className="text-2xl">✨</span>
              </h1>
            </div>

            <DarkModeToggle />
          </div>

          <div className="text-center">
            <p className={`text-xl ${theme.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              Transform your code between different programming languages using AI. Fast, accurate, and supports 13
              popular languages with intelligent context understanding.
            </p>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center mt-4 mb-6">
          <button
          onClick={() => {
          const prevSource = sourceLanguage
          setSourceLanguage(targetLanguage)
          setTargetLanguage(prevSource)
        }}

    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/30 hover:opacity-90 transition"
  >
    <ArrowLeftRight className="w-4 h-4" />
    <span>Swap Languages</span>
  </button>
</div>

        {/* Language Selectors */}
        <LanguageSelector
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
          sourceCode={sourceCode}
          isConverting={isConverting}
          onSourceLanguageChange={setSourceLanguage}
          onTargetLanguageChange={setTargetLanguage}
          onConvert={handleConvert}
        />

        {/* Error Display */}
        {error && (
          <div className="mb-8 max-w-4xl mx-auto">
            <div className={`${theme.background.alert.error} border ${theme.border.alert.error} rounded-xl p-4`}>
              <div className="flex items-center">
                <AlertCircle className={`w-5 h-5 ${theme.icon.alert.error} mr-3 flex-shrink-0`} />
                <div>
                  <h3 className={`text-sm font-medium ${theme.text.alert.error}`}>Conversion Failed</h3>
                  <p className={`text-sm ${theme.text.alert.errorSecondary} mt-1`}>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Editors */}
        <div className="grid grid-cols-2 gap-8 max-w-none mb-8">
          <SourceCodeEditor sourceCode={sourceCode} onSourceCodeChange={setSourceCode} />
          <ConvertedCodeEditor
            convertedCode={convertedCode}
            targetLanguage={targetLanguage}
            isConverting={isConverting}
          />
        </div>

        {/* Convert Code Button */}
        <div className="flex justify-center mb-16">
          <Button
            onClick={handleConvert}
            disabled={!sourceLanguage || !targetLanguage || !sourceCode.trim() || isConverting}
            className={`${theme.background.button} ${theme.text.button} px-8 py-3 text-lg font-medium rounded-xl`}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {isConverting ? "Converting..." : "Convert Code"}
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            className={`${theme.background.card} rounded-2xl p-8 text-center shadow-sm border ${theme.border.primary}`}
          >
            <div className="bg-blue-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>12+ Languages</h3>
            <p className={`${theme.text.secondary} leading-relaxed`}>
              Support for all major programming languages including JavaScript, Python, Java, C++, and more.
            </p>
          </div>

          <div
            className={`${theme.background.card} rounded-2xl p-8 text-center shadow-sm border ${theme.border.primary}`}
          >
            <div className="bg-green-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>AI-Powered</h3>
            <p className={`${theme.text.secondary} leading-relaxed`}>
              Advanced AI understands context and converts code while maintaining functionality and best practices.
            </p>
          </div>

          <div
            className={`${theme.background.card} rounded-2xl p-8 text-center shadow-sm border ${theme.border.primary}`}
          >
            <div className="bg-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${theme.text.primary} mb-4`}>Instant Results</h3>
            <p className={`${theme.text.secondary} leading-relaxed`}>
              Get your converted code in seconds. Fast processing with detailed explanations when needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
