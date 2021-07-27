const {
  APP_PROFILES = 'real',
  NCP_CLIENT_ID,
  KAKAO_CLIENT_ID,
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env

const publicRuntimeConfig = {
  APP_PROFILES,
  NCP_CLIENT_ID,
  KAKAO_CLIENT_ID,
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
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
