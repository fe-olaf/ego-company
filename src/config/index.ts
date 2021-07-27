import getConfig from 'next/config'

interface Config {
  NCP_CLIENT_ID: string
  KAKAO_CLIENT_ID: string
  APP_PROFILES: 'development' | 'real'
}

const config = getConfig()
const publicRuntimeConfig: Config = config.publicRuntimeConfig

export const { NCP_CLIENT_ID, APP_PROFILES, KAKAO_CLIENT_ID } =
  publicRuntimeConfig
