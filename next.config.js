// @ts-check
const { i18n } = require('./next-i18next.config.js')

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
]

const nextConfig = {
  i18n,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
