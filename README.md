# AI Code Converter

An **AI-powered code converter** that allows you to transform code between different programming languages. Built with **React**, **Next.js**, and **Tailwind CSS**, this project features a sleek UI, animated fuzzy intro, and intelligent code conversion.

---

## Features

- 🎨 **Fuzzy Intro Animation** – Stars, planets, and shooting stars with a glowing "AI Code Converter" title.  
- 💻 **12+ Programming Languages** – Supports JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, Kotlin.  
- ⚡ **Instant Conversion** – AI-powered conversion with context understanding and syntax preservation.  
- 🔄 **Swap Languages** – Swap source and target languages easily.  
- 📋 **Copy & Download** – Copy converted code to clipboard or download as a file.  
- ✨ **Light & Dark Mode** – Smooth gradient backgrounds and theme support.  

---

## Must to do
Change the Goq api in .env file

step-1: Go to chrome and search for "Gorq Api".
step-2: Create account in groq and click "create api"
step-3: copy and paste the api key in to .env file
step-4: Save and Run

## Languages Supported

- JavaScript  
- TypeScript  
- Python  
- Java  
- C++  
- C#  
- Go
- C  
- Rust  
- PHP  
- Ruby  
- Swift  
- Kotlin  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ai-code-converter.git
cd ai-code-converter


Install dependencies

npm install
# or
yarn install


Run the development server

npm run dev
```

## Project Structure
```
ai-code-converter/
│── components/
│   ├── fuzzy-text.tsx          # Fuzzy text animation
│   ├── setup-instructions.tsx  # Instructions for API key
│   └── ...                     # UI components (cards, buttons, selects)
│── pages/
│   └── index.tsx               # Main converter page
│── public/
│   └── demo.png                # Demo screenshot
│── styles/
│   └── globals.css             # Tailwind + stars/planets/shooting stars CSS
│── package.json
│── tsconfig.json
│── next.config.js
└── README.md
```
