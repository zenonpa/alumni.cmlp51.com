import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"

const wrapStyle = {
  textAlign: "center",
  padding: "3rem 1rem",
}

const titleStyle = {
  margin: "0 0 0.5rem",
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  color: "var(--color-text)",
}

const linkStyle = {
  display: "inline-block",
  marginTop: "1.5rem",
  color: "var(--color-accent)",
  fontWeight: 600,
}

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Página no encontrada | Alumni CMLP51</title>
      </Helmet>
      <div style={wrapStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={{ color: "var(--color-text-muted)", margin: 0 }}>
          Esta página no existe.
        </p>
        <Link to="/" style={linkStyle}>
          Volver al inicio
        </Link>
      </div>
    </Layout>
  )
}
