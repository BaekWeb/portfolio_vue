module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio_vue/'
    : '/',
  outputDir: "docs"
}