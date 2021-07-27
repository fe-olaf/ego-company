export type ThemeType = 'beige' | 'pink'

export type Theme = Beige

export interface ThemeBase {
  id: string
  type: ThemeType
  title: string
  location: Location
  date: string
  parents: {
    bridegroom: Parents
    bride: Parents
  }
}

export interface Beige extends ThemeBase {
  type: 'beige'
  bridegroom: Hero
  bride: Hero
  image: Image
  message: Message
}

export interface Image {
  intro: string
  gallery: string[]
}

export interface Message {
  intro: string
  greetings: string
  transport: string
  account: string
}

export type HeroType = 'bride' | 'bridegroom'

export interface Hero {
  name: string
  shortName: string
  imageUrl: string
}

export interface Parents {
  father: Parent
  mother: Parent
}

export interface Parent {
  name: string
  phone: string
  accountName?: string
  accountNumber?: string
  isCall: boolean
  isMessage: boolean
}

export interface Location {
  name: string
  phone: string
  address: string
  transportInfo: {
    subway: string[]
    bus: string[]
  }
  lat: number
  lng: number
  pathLink: {
    naver: string
  }
  message?: string
}
