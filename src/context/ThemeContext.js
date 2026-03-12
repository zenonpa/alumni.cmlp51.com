import React, { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

const STORAGE_KEY = "alumni-theme"

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light")

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = stored || (prefersDark ? "dark" : "light")
    setThemeState(initial)
  }, [])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.setAttribute("data-theme", theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {}
  }, [theme])

  const setTheme = (value) => setThemeState(value === "dark" ? "dark" : "light")
  const toggleTheme = () => setThemeState((t) => (t === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
