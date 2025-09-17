"use client"

import React, { useEffect, useState } from "react"
import FuzzyText from "./FuzzyText" // adjust path if FuzzyText is in the same folder
import MainPage from "../app/page" // adjust path to your main page

export default function Fuzzy() {
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true)
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (showMain) {
    return <MainPage />
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <FuzzyText
        fontSize="clamp(2rem, 10vw, 10rem)"
        fontWeight={900}
        color="#00ffea"
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={false}
      >
        AI Code Converter
      </FuzzyText>
    </div>
  )
}
