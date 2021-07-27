import getConfig from 'next/config'

interface Config {
  NCP_CLIENT_ID: string
  KAKAO_CLIENT_ID: string
  APP_PROFILES: 'development' | 'real'
  FIREBASE_APIKEY: string
  FIREBASE_AUTH_DOMAIN: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_STORAGE_BUCKET: string
  FIREBASE_MESSAGING_SENDER_ID: string
  FIREBASE_APP_ID: string
  FIREBASE_MEASUREMENT_ID: string
}

const config = getConfig()
const publicRuntimeConfig: Config = config.publicRuntimeConfig

export const {
  NCP_CLIENT_ID,
  APP_PROFILES,
  KAKAO_CLIENT_ID,
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = publicRuntimeConfig
