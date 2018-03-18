module.exports = {
  siteMetadata: {
    title: 'La Guinda',
  },
  plugins: ['gatsby-plugin-react-helmet', {
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115952518-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
  }],
  pathPrefix: "/laguinda"
};
