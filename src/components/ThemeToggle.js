import React from "react"
import { useTheme } from "../context/ThemeContext"

const styles = {
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    padding: 0,
    border: "1px solid var(--color-border)",
    borderRadius: "50%",
    background: "var(--color-surface)",
    color: "var(--color-text)",
    cursor: "pointer",
    boxShadow: "var(--shadow)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={styles.button}
      aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
      title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
    >
      {theme === "dark" ? (
        <span aria-hidden="true">☀️</span>
      ) : (
        <span aria-hidden="true">🌙</span>
      )}
    </button>
  )
}
