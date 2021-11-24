module.exports = {
  siteMetadata: {
    title: "Designing app",
    mainMenu: [
      { title: 'Home', link: '/' ,},
      { title: 'Services', link: '/', },
      { title: 'About us', link: '/' ,},
      { title: 'Contact us', link: '/', },
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-typescript',
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      }
    },
  ],
};
