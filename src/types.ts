export interface AppStore {
  cards: Card[]
}

export interface Card {
  title?: string
  links: {
    label?: string
    url?: string
  }[]
}
