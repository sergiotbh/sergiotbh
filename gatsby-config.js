module.exports = {
  siteMetadata: {
    url: `https://sergiotbh.dev`,
    title: `sergiotbh.dev`,
    description: 'Sergio is a frontend web developer based in Guadalajara, Mexico.'
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "sergiotbh.dev",
      short_name: "sergiotbh.dev",
      start_url: "/",
      background_color: "#FFFFFF",
      theme_color: "#6631fb",
      display: "browser",
      "icon": "src/images/icon.png"
    }
  },
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
]
};