import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { getMemberImageUrl, getPhotoUrl } from "../utils/imageUrl"

const backLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "2rem",
  fontSize: "0.95rem",
  color: "var(--color-text-muted)",
}

const wrapStyle = {
  maxWidth: 640,
  margin: "0 auto",
}

const nameStyle = {
  margin: "0 0 0.5rem",
  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  fontWeight: 800,
  color: "var(--color-text)",
}

const roleStyle = {
  margin: 0,
  fontSize: "1.15rem",
  color: "var(--color-text-muted)",
}

const bioStyle = {
  margin: "1.5rem 0",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  color: "var(--color-text)",
}

const sectionTitleStyle = {
  margin: "2rem 0 0.75rem",
  fontSize: "0.85rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "var(--color-text-muted)",
}

const linkListStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
}

const linkItemStyle = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  color: "var(--color-accent)",
  fontWeight: 500,
  transition: "background 0.15s ease, border-color 0.15s ease",
}

const avatarWrapStyle = {
  marginBottom: "1.5rem",
}

const avatarStyle = {
  width: 120,
  height: 120,
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid var(--color-border)",
}

const galleryGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1.25rem",
  marginTop: "0.75rem",
}

const galleryItemStyle = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "var(--shadow)",
  cursor: "pointer",
}

const galleryImgStyle = {
  width: "100%",
  height: "auto",
  objectFit: "contain",
  display: "block",
  backgroundColor: "var(--color-bg)",
}

const galleryCaptionStyle = {
  margin: 0,
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  lineHeight: 1.4,
  color: "var(--color-text-muted)",
}

const lightboxOverlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
  zIndex: 50,
}

const lightboxInnerStyle = {
  maxWidth: "900px",
  width: "100%",
  maxHeight: "90vh",
  background: "var(--color-surface)",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
}

const lightboxImgWrapStyle = {
  padding: "1rem 1rem 0",
}

const lightboxImgStyle = {
  maxWidth: "100%",
  maxHeight: "65vh",
  width: "100%",
  height: "auto",
  objectFit: "contain",
  display: "block",
}

const lightboxCaptionStyle = {
  padding: "1rem 1.25rem 1.25rem",
  fontSize: "0.95rem",
  lineHeight: 1.5,
  color: "var(--color-text)",
}

const lightboxCloseStyle = {
  position: "absolute",
  top: "1rem",
  right: "1.25rem",
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "1.75rem",
  cursor: "pointer",
}

export default function MemberLanding({ data, pageContext }) {
  const { slug } = pageContext
  const member = (data.allMembersJson?.nodes || []).find(
    (n) => n.parent?.relativeDirectory === slug
  ) || null

  const [activePhoto, setActivePhoto] = useState(null)

  if (!member) {
    return (
      <Layout>
        <p>Miembro no encontrado.</p>
        <Link to="/">Volver al inicio</Link>
      </Layout>
    )
  }

  const { name, role, bio, links, email, avatar, photos } = member
  const avatarUrl = getMemberImageUrl(avatar, slug)

  return (
    <Layout>
      <Helmet>
        <title>{name} | Alumni CMLP51</title>
        <meta name="description" content={bio || `Landing de ${name}`} />
      </Helmet>
      <Link to="/" style={backLinkStyle} className="back-link">
        ← Volver a miembros
      </Link>
      <div style={wrapStyle}>
        {avatarUrl && (
          <div style={avatarWrapStyle}>
            <img src={avatarUrl} alt="" style={avatarStyle} />
          </div>
        )}
        <h1 style={nameStyle}>{name}</h1>
        {role && <p style={roleStyle}>{role}</p>}
        {bio && <p style={bioStyle}>{bio}</p>}

        {photos && photos.length > 0 && (
          <>
            <h2 style={sectionTitleStyle}>Galería</h2>
            <div style={galleryGridStyle} className="member-gallery">
              {photos.map((photo, i) => {
                const photoUrl = getPhotoUrl(photo, slug)
                if (!photoUrl) return null
                return (
                  <figure
                    key={i}
                    style={galleryItemStyle}
                    onClick={() => setActivePhoto(photo)}
                  >
                    <img src={photoUrl} alt={photo.description || ""} style={galleryImgStyle} />
                    {photo.description && (
                      <figcaption style={galleryCaptionStyle}>{photo.description}</figcaption>
                    )}
                  </figure>
                )
              })}
            </div>
          </>
        )}

        {(email || (links && links.length > 0)) && (
          <>
            <h2 style={sectionTitleStyle}>Contacto</h2>
            <ul style={linkListStyle}>
              {email && (
                <li>
                  <a href={`mailto:${email}`} style={linkItemStyle}>
                    Email
                  </a>
                </li>
              )}
              {links &&
                links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkItemStyle}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
      {activePhoto && (
        <div
          style={lightboxOverlayStyle}
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={lightboxInnerStyle}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              style={lightboxCloseStyle}
              aria-label="Cerrar imagen ampliada"
            >
              ×
            </button>
            <div style={lightboxImgWrapStyle}>
              <img
                src={getPhotoUrl(activePhoto, slug)}
                alt={activePhoto.description || ""}
                style={lightboxImgStyle}
              />
            </div>
            {activePhoto.description && (
              <p style={lightboxCaptionStyle}>{activePhoto.description}</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query MemberLanding {
    allMembersJson {
      nodes {
        name
        role
        bio
        avatar
        email
        links {
          label
          url
        }
        photos {
          file
          url
          description
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`
