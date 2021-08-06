export type Theme = 'beige' | 'pink'
export type InvitationType = 'bride' | 'bridegroom'

export interface Wedding {
  id: string
  theme: Theme
  title: string
  description: string
  location: Location
  date: string
  bridegroom: Hero
  bride: Hero
  parents: {
    bridegroom: Parents
    bride: Parents
  }
  image: Image
  message: Message
  animation: boolean
}

export interface Image {
  intro: string
  gallery: string[]
}

export interface Message {
  intro?: string
  greetings: string
  transport?: string
  account?: string
}

export interface Hero {
  name: string
  shortName: string
  imageUrl?: string
  phone?: string
  isCall: boolean
  isMessage: boolean
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
    subway?: string[]
    bus?: string[]
  }
  lat: number
  lng: number
  pathLink: string
  message?: string
}
