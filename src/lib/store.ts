import { writable } from 'svelte/store'

import type { AppStore } from '../types'

export const appStore = writable<AppStore>()
