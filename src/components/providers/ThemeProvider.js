import React, { useState, useEffect } from "react"

import ThemeContext from "../../contexts/ThemeContext"

const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const getInitialTheme = _ => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }

  return "light"
}

export default ThemeProvider