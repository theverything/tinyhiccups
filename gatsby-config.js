module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.tinyhiccups.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tiny Hiccups',
        short_name: 'Tiny Hiccups',
        start_url: '/',
        background_color: '#daacc9',
        theme_color: '#daacc9',
        display: 'standalone',
        // icon: 'src/images/icon.png', // This path is relative to the root of the site.
        // include_favicon: true, // Include favicon
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
