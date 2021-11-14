const config = require("./data/siteConfig");

module.exports = {
  siteMetadata: {
    ...config
  },
  pathPrefix: '/tail-my-box',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tail-my-box`,
        short_name: `Tail My Box`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-w.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ]
}
