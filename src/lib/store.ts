/*
 * This store is basically globally-accessible state
 * Consumers just import it and then they're good to use subscribe/set
 * Note that Svelte points out a store isn't a value to access directly anywhere
 * Access is preferred to only be via subscription updates
 *
 * On app init (App.svelte), we set the store based off local storage
 */
import { writable } from 'svelte/store'

import type { AppStoreValue } from '../types'

export const appStore = writable<AppStoreValue>()
