export interface AppStoreValue {
  cards: CardType[]
}

export interface TabType {
  title: string
  links: LinkType[]
  cards: CardType[]
}

export interface LinkType {
  label?: string
  url?: string
}

export interface CardType {
  title?: string
  links: LinkType[]
}

export interface SettingsType {
  color: string
  defaultTab: string
}

export interface ChangeEvent {
  currentTarget: HTMLInputElement | HTMLTextAreaElement
}
