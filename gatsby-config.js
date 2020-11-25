module.exports = {
  siteMetadata: {
    siteTitle: `Quick Product Import`,
    defaultTitle: `Quick Product Import`,
    siteTitleShort: `Quick Product Import`,
    siteDescription: `The quickest and most user-friendly Shopify app for uploading products to your store with a simple .CSV spreadsheet.`,
    siteUrl: `https://quickproductimport.com`,
    siteAuthor: `Frontier Web Development`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#333`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quick Product Import`,
        short_name: `Quick Product Import`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
