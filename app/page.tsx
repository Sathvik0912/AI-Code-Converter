"use client"

import { useState, useEffect,useRef } from "react"
import Fuzzy from "@/components/Fuzzy"
import CodeConverter from "@/components/CodeConverter"

export default function Page() {
  
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 2000) // 2 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!showMain) {
    return <Fuzzy />
  }

  return <CodeConverter />
}
