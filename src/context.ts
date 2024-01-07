import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'

type LayerConfig = Writable<{ activate: boolean, type: 'modal'|'drawer', subtype: 'tab' | 'card' | 'grid' }>
type SettingsTypes = Writable<{ editable: boolean, color: string }>


export function setLayerConfig(){
    setContext('layerConfig', writable({activate: false, type: 'drawer', subtype: 'tab' }))
    setContext('settings', writable({editable: false, color: '#CE7432'}))
}
export function getLayerConfig() {
    return getContext<LayerConfig>('layerConfig')
}

export function getSettings() {
    return getContext<SettingsTypes>('settings')
}