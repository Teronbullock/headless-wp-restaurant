// apollo.config.js
// const urlPath = 'http://headless-wp-restaurant.local/graphql/?=query'
const urlPath = 'http://headless-wp-restaurant.local/graphql/'

module.exports = {
  client: {
    service: {
      name: 'bigdaddysbbq',
      // URL to the GraphQL API
      url: urlPath,
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}