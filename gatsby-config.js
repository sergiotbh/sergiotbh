module.exports = {
  pathPrefix: "/",
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
]
};