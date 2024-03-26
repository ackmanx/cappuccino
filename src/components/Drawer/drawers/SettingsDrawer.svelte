<script lang="ts">
  import type { Writable } from 'svelte/store'

  import { getSettings } from '../../../context.js'
  import CopyIcon from '../../../images/CopyIcon.svelte'
  import RestoreIcon from '../../../images/RestoreIcon.svelte'
  import type { ChangeEvent, TabType } from '../../../types'
  import Button from '../../inputs/Button/Button.svelte'
  import RadioGroup from '../../inputs/RadioGroup/RadioGroup.svelte'
  import ToggleSwitch from '../../inputs/ToggleSwitch/ToggleSwitch.svelte'

  let settings = getSettings()
  let jsonData: string

  export let tabs: Writable<TabType[]>

  const copyHandler = () => {
    navigator.clipboard.writeText(JSON.stringify($tabs))
  }

  const accentColorHandler = (event: any) => {
    console.log(event.currentTarget.value)
    $settings = { ...$settings, color: event.currentTarget.value }
    localStorage.setItem('settings', JSON.stringify($settings))
  }

  const defaultTabHandler = (event: any) => {
    $settings = { ...$settings, defaultTab: parseInt(event.currentTarget.value) }
    localStorage.setItem('settings', JSON.stringify($settings))
  }

  const editableHandler = (editable: boolean) => {
    $settings = { ...$settings, editable: editable }
    localStorage.setItem('settings', JSON.stringify($settings))
  }

  const changeAppContentHandler = (event: ChangeEvent) => {
    if (event.currentTarget.value !== '') {
      return
    }
    $tabs = JSON.parse(jsonData)
    localStorage.setItem('appContent', jsonData)
  }
</script>

<section>
  <h2>Settings</h2>
  <ToggleSwitch label="hide edit options" onchange={editableHandler} value={$settings.editable} />
  <RadioGroup
    selectedValue={$settings.defaultTab ?? 0}
    onchange={defaultTabHandler}
    options={$tabs?.map((tab, index) => ({ label: tab.title, value: index }))}
    legend="Default tab"
  />

  <label>
    chose accent color
    <input type="color" value={$settings.color} on:change={accentColorHandler} />
  </label>
  <div>
    <h3>JSON backup</h3>
    <p>
      Clicking the button will copy the data used in this application. You can then just copy and
      paste it into a text file or JSON file type to ensure you don't lose all your links
    </p>
    <Button onClick={copyHandler}><CopyIcon /></Button>
  </div>
  <h3>Restore</h3>
  <label>
    <span>Paste the information you've backed up previously into this text field to restore</span>
    <textarea rows="7" bind:value={jsonData} />
    <Button onClick={changeAppContentHandler}><RestoreIcon />Restore</Button>
  </label>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  textarea {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  label {
    display: block;
  }
</style>
