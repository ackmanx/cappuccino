import { getContext, setContext } from 'svelte'
import { type Writable, writable } from 'svelte/store'

type LayerConfig = Writable<{
  activate: boolean
  type: 'modal' | 'drawer'
  subtype: 'tab' | 'card' | 'grid' | 'setting'
}>

type SettingsTypes = Writable<{ editable: boolean; color: string; defaultTab: number }>

type DraggableListType = Writable<{
  key: string
  grabbed: number
  draggedOver: number
  isDragEnabled: boolean
  activeListArea: boolean
}>

export function setLayerConfig() {
  setContext('layerConfig', writable({ activate: false, type: 'drawer', subtype: 'tab' }))
}

export function getLayerConfig() {
  return getContext<LayerConfig>('layerConfig')
}

export function getSettings() {
  return getContext<SettingsTypes>('settings')
}

export function setSettings() {
  const settings = localStorage.getItem('settings')
  if (settings) {
    setContext('settings', writable(JSON.parse(settings)))
  } else {
    setContext('settings', writable({ editable: false, color: '#CE7432', defaultTab: 0 }))
  }
}

export function getContextByDraggableList(key: string) {
  return getContext<DraggableListType>(key)
}

export function setContextByDraggableList(key: string) {
  setContext(
    key,
    writable(structuredClone({ key: key, grabbed: -1, draggedOver: -1, isDragEnabled: false }))
  )
}
