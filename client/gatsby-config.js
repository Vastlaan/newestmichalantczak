module.exports = {
  siteMetadata: {
    title: `Michal Antczak Web Developer`,
    description: `The most reliable and the only affordable Web Developer who creates outstanding, user friendly and well designed websites, mobile Apps and webshops. SEO and online marketing specialist in Amsterdam.`,
    author: `Michal Antczak`,
    siteUrl: `https://www.michalantczak.com`,
    keywords: `make website, design websites, create website, make website for my company, website for bussines, zakelijke website laten maken, online webshop starten, webshop beginnen, webdesign, web developer, amsterdam developer, amsterdam, purmerend web developer, purmerend, amsterdam make website`,
    robots: `index, follow`,
    image: `/michalantczak.png`,
    canonicalUrl: `https://www.michalantczak.com`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:4500",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `michal-antczak-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
