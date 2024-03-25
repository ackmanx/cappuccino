import { mount } from 'svelte'

import '@fontsource-variable/inter'

import App from './App.svelte'
import './global.css'
import './variables.css'

// @ts-expect-error We're always going to have this element and if not, I want to app the crash on startup anyway
const app = mount(App, { target: document.getElementById('app') })

export default app
