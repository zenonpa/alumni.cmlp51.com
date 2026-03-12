import React from "react"
import { Link } from "gatsby"
import { getMemberImageUrl } from "../utils/imageUrl"

const cardStyle = {
  display: "block",
  padding: "1.5rem",
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: 12,
  boxShadow: "var(--shadow)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  color: "var(--color-text)",
  textDecoration: "none",
}

const avatarWrapStyle = {
  marginBottom: "0.75rem",
}

const avatarStyle = {
  width: 56,
  height: 56,
  borderRadius: "50%",
  objectFit: "cover",
  border: "2px solid var(--color-border)",
}

const nameStyle = {
  margin: "0 0 0.25rem",
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "var(--color-text)",
}

const roleStyle = {
  margin: 0,
  fontSize: "0.9rem",
  color: "var(--color-text-muted)",
}

const bioStyle = {
  margin: "0.75rem 0 0",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  color: "var(--color-text-muted)",
}

export function MemberCard({ slug, name, role, bio, avatar }) {
  const avatarUrl = getMemberImageUrl(avatar, slug)

  return (
    <Link to={`/m/${slug}`} style={cardStyle} className="member-card">
      {avatarUrl && (
        <div style={avatarWrapStyle}>
          <img src={avatarUrl} alt="" style={avatarStyle} />
        </div>
      )}
      <h2 style={nameStyle}>{name}</h2>
      {role && <p style={roleStyle}>{role}</p>}
      {bio && <p style={bioStyle}>{bio}</p>}
    </Link>
  )
}

export function MemberGrid({ children }) {
  return <div className="member-grid">{children}</div>
}
