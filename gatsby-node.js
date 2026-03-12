const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type MembersJsonLinks {
      label: String
      url: String
    }
    type MembersJsonPhotos {
      file: String
      url: String
      description: String
    }
    type MembersJson implements Node {
      name: String
      role: String
      bio: String
      avatar: String
      email: String
      links: [MembersJsonLinks]
      photos: [MembersJsonPhotos]
    }
  `)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MemberSlugs {
      allMembersJson {
        nodes {
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const members = result.data.allMembersJson.nodes
  const template = path.resolve("src/templates/member-landing.js")

  members.forEach((node) => {
    const slug = node.parent?.relativeDirectory
    if (!slug) return

    createPage({
      path: `/m/${slug}`,
      component: template,
      context: {
        slug,
      },
    })
  })
}
