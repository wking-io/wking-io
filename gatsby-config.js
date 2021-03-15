require('dotenv').config({
  path: '.env.${process.env.NODE_ENV}',
});

module.exports = {
  siteMetadata: {
    title: 'Frontend Developer. Using Elm when I can.',
    titleTemplate: '%s | wking',
    description: 'Sharing projects and content on functional programming and frontend development.',
    siteUrl: 'https://www.wking.dev',
    image: '/images/projects/wking.jpg',
    twitterUsername: '@wking__',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wking',
        short_name: 'wking',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/wking-logo-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [ 'Roboto Slab:700', 'Fira Sans:400,400i,500,500i,700,700i' ],
      },
    },
  ],
};
