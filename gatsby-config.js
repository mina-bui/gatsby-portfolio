module.exports = {
  siteMetadata: {
    title: `Mina Bui`,
    description: `Mina Bui is a front end developer and web designer based in Vancouver, BC. She loves to build responsive, interactive websites and web applications using React.js and WordPress.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`, // Support for SASS stylesheets
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`, // Change later
        theme_color: `#663399`, // Change later
        display: `minimal-ui`,
        icon: `src/images/favicon_full.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
