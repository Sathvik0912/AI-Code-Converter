import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { groq } from "@ai-sdk/groq"

export async function POST(request: NextRequest) {
  try {
    const { sourceLanguage, targetLanguage, sourceCode } = await request.json()

    if (!sourceLanguage || !targetLanguage || !sourceCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          error: "Groq API key is not configured. Please add GROQ_API_KEY to your environment variables.",
        },
        { status: 500 },
      )
    }

    const prompt = `Convert the following ${sourceLanguage} code to ${targetLanguage}. 
    
Please follow these guidelines:
1. Maintain the same functionality and logic
2. Use idiomatic ${targetLanguage} patterns and conventions
3. Include appropriate comments if needed
4. Ensure the code is clean and readable
5. Only return the converted code, no explanations

Source code in ${sourceLanguage}:
\`\`\`${sourceLanguage.toLowerCase()}
${sourceCode}
\`\`\`

Convert to ${targetLanguage}:`

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      prompt,
      temperature: 0.1,
    })

    // Clean up the response to remove any markdown formatting
    let convertedCode = text.trim()

    // Remove code block markers if present
    const codeBlockRegex = /```[\w]*\n?([\s\S]*?)\n?```/
    const match = convertedCode.match(codeBlockRegex)
    if (match) {
      convertedCode = match[1].trim()
    }

    return NextResponse.json({ convertedCode })
  } catch (error) {
    console.error("Error in code conversion:", error)

    let errorMessage = "Failed to convert code"
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage = "Groq API key is invalid or missing"
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Rate limit exceeded. Please try again later"
      } else if (error.message.includes("network")) {
        errorMessage = "Network error. Please check your connection"
      } else {
        errorMessage = `Conversion failed: ${error.message}`
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
