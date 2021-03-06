module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      '/api': {
        'target': 'http://localhost:3000',
        'changeOrigin': true,
        'secure': false,
        'pathRewrite': {
          '^/api': ''
        }
      }
    }
  }
}
