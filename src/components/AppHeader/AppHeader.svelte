<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  import { getLayerConfig } from '../../context'
  import SettingsIcon from '../../svgs/SettingsIcon.svelte'
  import Button from '../inputs/Button/Button.svelte'

  const layerConfig = getLayerConfig()

  function openSettingsDrawer() {
    $layerConfig = { activate: true, type: 'drawer', subtype: 'setting' }
  }
</script>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<component>
  <img src="logo.svg" alt="cappuccino logo" />
  <input />
  <Button onClick={openSettingsDrawer} --color-accent="transparent"><SettingsIcon /></Button>
</component>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  component {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  input {
    height: 40px;
    width: 50%;
    padding-left: 16px;
    font-size: 24px;
    border: 1px solid #b0b0b0;
    border-radius: 5px;
  }

  img {
    width: 60px;
  }
</style>
