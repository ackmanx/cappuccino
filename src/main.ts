import App from './App.svelte'
import './app.css'

const app = new App({
  // @ts-expect-error
  target: document.getElementById('app'),
})

export default app
