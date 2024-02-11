import { getContext, setContext } from 'svelte'
import { type Writable, writable } from 'svelte/store'

type LayerConfig = Writable<{
  activate: boolean
  type: 'modal' | 'drawer'
  subtype: 'tab' | 'card' | 'grid'
}>

type SettingsTypes = Writable<{ editable: boolean; color: string }>

type LayerData = { cardIndex: number }

type DraggableListType = Writable<{
  key: string
  grabbed: number
  draggedOver: number
  isDragEnabled: boolean
  activeListArea: boolean
}>

export function setLayerConfig() {
  setContext('layerConfig', writable({ activate: false, type: 'drawer', subtype: 'tab' }))
  setContext('settings', writable({ editable: false, color: '#CE7432' }))
}

export function getLayerConfig() {
  return getContext<LayerConfig>('layerConfig')
}

export function getSettings() {
  return getContext<SettingsTypes>('settings')
}

export function getContextByDraggableList(key: string) {
  return getContext<DraggableListType>(key)
}

export function setContextByDraggableList(key) {
  setContext(
    key,
    writable(structuredClone({ key: key, grabbed: -1, draggedOver: -1, isDragEnabled: false }))
  )
}
