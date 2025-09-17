import type { ThemeType } from "./light-theme"

export const darkTheme: ThemeType = {
  // Background colors
  background: {
    primary: "bg-gradient-to-br from-gray-900 via-gray-900 to-slate-900",
    secondary: "bg-gray-800",
    card: "bg-gray-700/90",
    button: "bg-blue-600 hover:bg-blue-700",
    buttonSecondary: "bg-gray-800 hover:bg-gray-700",
    alert: {
      error: "bg-red-900/20",
      warning: "bg-yellow-900/20",
      info: "bg-blue-900/20",
    },
    setup: "bg-gray-800/95",
    codeEditor: "bg-gray-900/30",
  },

  // Text colors
  text: {
    primary: "text-white",
    secondary: "text-gray-300",
    tertiary: "text-gray-400",
    white: "text-white",
    button: "text-white",
    buttonSecondary: "text-white",
    alert: {
      error: "text-red-200",
      errorSecondary: "text-red-300",
      warning: "text-yellow-200",
      warningSecondary: "text-yellow-300",
      info: "text-blue-200",
      infoSecondary: "text-blue-300",
    },
    setup: "text-gray-300",
    placeholder: "text-white",
    label: "text-white",
    code: "text-gray-100",

  },

  // Border colors
  border: {
    primary: "border-gray-700/50",
    secondary: "border-gray-600/50",
    alert: {
      error: "border-red-800",
      warning: "border-yellow-800",
      info: "border-blue-800",
    },
    input: "border-gray-700 focus:border-blue-500",
  },

  // Icon colors
  icon: {
    primary: "text-gray-300",
    secondary: "text-gray-400",
    alert: {
      error: "text-red-400",
      warning: "text-yellow-400",
      info: "text-blue-400",
    },
  },
}
