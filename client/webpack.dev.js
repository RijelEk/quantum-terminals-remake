const { merge } = require('webpack-merge')
const ip = require('internal-ip')
const path = require('path')
const common = require('./webpack.config.js')

const infoColor = (_message) =>
{
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`
}

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    host:"0.0.0.0",
    allowedHosts: ["localhost:8080"],
    public:"localhost:8080",
    port: 8080,
    watchOptions: {
      ignored: /node_modules/,
    },
    after: function(app, server, compiler)
    {
        const port = server.options.port
        const https = server.options.https ? 's' : ''
        const localIp = ip.v4.sync()
        const domain1 = `http${https}://${localIp}:${port}`
        const domain2 = `http${https}://localhost:${port}`
        
        console.log(`Project running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`)
    }
  },
})
