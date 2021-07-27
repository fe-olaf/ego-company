const { APP_PROFILES = 'real', NCP_CLIENT_ID, KAKAO_CLIENT_ID } = process.env

const publicRuntimeConfig = {
  APP_PROFILES,
  NCP_CLIENT_ID,
  KAKAO_CLIENT_ID,
}

module.exports = {
  env: publicRuntimeConfig,
  publicRuntimeConfig,
  webpack5: true,
  generateEtags: true,
  webpack: ({ entry: originalEntry, plugins, ...restConfig }, { webpack }) => ({
    ...restConfig,
    entry: async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./src/utils/polyfills.js')
      ) {
        entries['main.js'].unshift('./src/utils/polyfills.js')
      }

      return entries
    },
    plugins: [...plugins, new webpack.IgnorePlugin(/\/__tests__\//)],
  }),
}
