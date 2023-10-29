export interface AppStoreValue {
  cards: Card[]
}

export interface Card {
  title?: string
  links: {
    label?: string
    url?: string
  }[]
}
