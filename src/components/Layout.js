import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ThemeToggle } from "./ThemeToggle"
import "../styles/global.css"

const headerStyle = {
  borderBottom: "1px solid var(--color-border)",
  background: "var(--color-surface)",
  boxShadow: "var(--shadow)",
}

const innerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: 56,
  padding: "0.75rem 0",
}

const titleStyle = {
  margin: 0,
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "var(--color-text)",
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}

export function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header style={headerStyle}>
        <div className="container" style={innerStyle}>
          <Link to="/" style={{ color: "inherit" }}>
            <h1 style={titleStyle}>{title || "Alumni CMLP51"}</h1>
          </Link>
          <nav style={navStyle} aria-label="Navegación principal">
            <Link to="/">Inicio</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        {children}
      </main>
    </>
  )
}
