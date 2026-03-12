import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { MemberCard, MemberGrid } from "../components/MemberCard"
import { Helmet } from "react-helmet"

const titleStyle = {
  marginTop: 0,
  marginBottom: "0.5rem",
  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
  fontWeight: 800,
  color: "var(--color-text)",
}

const subtitleStyle = {
  margin: "0 0 2rem",
  fontSize: "1.1rem",
  color: "var(--color-text-muted)",
}

export default function Index({ data }) {
  const members = data.allMembersJson.nodes

  return (
    <Layout>
      <Helmet>
        <title>Miembros | Alumni CMLP51</title>
        <meta name="description" content="Directorio de miembros Alumni CMLP51 con landing personal." />
      </Helmet>
      <h1 style={titleStyle}>Miembros</h1>
      <p style={subtitleStyle}>
        Explora las landing personales de los miembros del alumni.
      </p>
      <MemberGrid>
        {members.map((node) => {
          const slug = node.parent?.relativeDirectory
          if (!slug) return null
          return (
            <MemberCard
              key={slug}
              slug={slug}
              name={node.name}
              role={node.role}
              bio={node.bio}
              avatar={node.avatar}
            />
          )
        })}
      </MemberGrid>
    </Layout>
  )
}

export const query = graphql`
  query MemberList {
    allMembersJson {
      nodes {
        name
        role
        bio
        avatar
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`
