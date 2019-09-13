module.exports = {
  siteMetadata: {
    title: `NEWA`,
    description: `newa site`,
    author: `@alexsinfarosa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/src/carousel`,
      },
    },
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
        name: `NEWA site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"],
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your wordpress source
    //     baseUrl: `https://live-cu-newa.pantheonsite.io`,
    //     protocol: `https`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: true,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "",
    //     // This is field under which it's accessible
    //     fieldName: "",
    //     // Url to query from
    //     url: "https://live-cu-newa.pantheonsite.io/graphql",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
