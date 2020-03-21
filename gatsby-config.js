/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Shuaib Mohamamd'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/`,
      },
    }
  ]
}