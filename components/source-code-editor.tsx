"use client"

import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/contexts/theme-context"


interface SourceCodeEditorProps {
  sourceCode: string
  onSourceCodeChange: (value: string) => void
}

export default function SourceCodeEditor({ sourceCode, onSourceCodeChange }: SourceCodeEditorProps) {
  const { theme,isDark } = useTheme()
  return (
    <Card className={`p-6 border ${theme.background.card} ${theme.border.primary}`}>
      <div className="mb-4">
      <h3 className={`text-lg font-semibold ${theme.text.primary}`}>Source Code</h3>
      <p className={`text-sm ${theme.text.secondary}`}>Paste your code here</p>
      </div>
      <Textarea
  value={sourceCode}
  onChange={(e) => onSourceCodeChange(e.target.value)}
  placeholder="Enter your source code here..."
  className={`min-h-96 font-mono text-sm resize-none border ${theme.border.input} placeholder:text-gray-500 ${
    isDark 
      ? "text-white " + theme.background.codeEditor 
      : "text-gray-900 " + theme.background.codeEditor
  } placeholder:text-gray-400`}
/>


    </Card>
  )
}
