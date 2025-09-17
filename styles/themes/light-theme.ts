export const lightTheme = {
  // Background colors
  background: {
    primary: "bg-gray-50",
    secondary: "bg-white",
    card: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    buttonSecondary: "bg-white hover:bg-gray-50",
    alert: {
      error: "bg-red-50",
      warning: "bg-yellow-50",
      info: "bg-blue-50",
    },
    setup: "bg-gray-700",
    codeEditor: "bg-gray-100/70",
  },

  // Text colors
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    tertiary: "text-gray-400",
    white: "text-white",
    button: "text-white",
    buttonSecondary: "text-gray-900",
    alert: {
      error: "text-red-800",
      errorSecondary: "text-red-700",
      warning: "text-yellow-800",
      warningSecondary: "text-yellow-700",
      info: "text-blue-800",
      infoSecondary: "text-blue-700",
    },
    setup: "text-gray-300",
    placeholder: "text-gray-500",
    label: "text-black",
    code: "text-gray-900",
  },

  // Border colors
  border: {
    primary: "border-gray-200",
    secondary: "border-gray-300",
    alert: {
      error: "border-red-200",
      warning: "border-yellow-200",
      info: "border-blue-200",
    },
    input: "border-gray-300 focus:border-blue-500",
  },

  // Icon colors
  icon: {
    primary: "text-gray-600",
    secondary: "text-gray-400",
    alert: {
      error: "text-red-600",
      warning: "text-yellow-600",
      info: "text-blue-600",
    },
  },
}

export type ThemeType = typeof lightTheme
