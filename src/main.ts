import App from './App.svelte'
import './global.css'
import './variables.css'

const app = new App({
  // @ts-expect-error
  target: document.getElementById('app'),
})

export default app
