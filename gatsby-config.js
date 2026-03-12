/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Alumni CMLP51`,
    description: `Directorio de miembros con landing personal`,
    siteUrl: `https://alumni.cmlp51.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/content/members`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `MembersJson`,
      },
    },
  ],
}
