"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"


interface ConvertedCodeEditorProps {
  convertedCode: string
  targetLanguage: string
  isConverting: boolean
}

export default function ConvertedCodeEditor({ convertedCode, targetLanguage, isConverting }: ConvertedCodeEditorProps) {
  const handleCopy = async () => {
    if (convertedCode) {
      await navigator.clipboard.writeText(convertedCode)
    }
  }

  const handleDownload = () => {
    if (convertedCode && targetLanguage) {
      const extension = getFileExtension(targetLanguage)
      const blob = new Blob([convertedCode], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `converted_code.${extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const getFileExtension = (language: string) => {
    const extensions: { [key: string]: string } = {
      JavaScript: "js",
      Python: "py",
      Java: "java",
      "C++": "cpp",
      "C#": "cs",
      C: "c",
      Go: "go",
      Rust: "rs",
      TypeScript: "ts",
      PHP: "php",
      Ruby: "rb",
      Swift: "swift",
      Kotlin: "kt",
    }
    return extensions[language] || "txt"
  }
  const { theme,isDark } = useTheme()


  return (
    <Card className={`p-6 border ${theme.background.card} ${theme.border.primary}`}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className={`text-lg font-semibold ${theme.text.primary}`}>Source Code</h3>
          <p className={`text-sm ${theme.text.secondary}`}>
          {isConverting ? "Converting..." : "AI-generated conversion"}
        </p>
</div>
        {convertedCode && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              className="h-8 w-8 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDownload}
              className="h-8 w-8 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Download className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        )}
      </div>

<Textarea
  value={convertedCode}
  readOnly
  placeholder="Converted code will appear here..."
  className={`min-h-96 font-mono text-sm resize-none border ${theme.border.input} placeholder:text-gray-500 ${
    isDark
      ? "text-white " + theme.background.codeEditor + " placeholder:text-gray-400"
      : "text-gray-900 " + theme.background.codeEditor
  }`}
/>



    </Card>
  )
}
