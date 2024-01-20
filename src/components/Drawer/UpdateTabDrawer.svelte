<script lang="ts">
  import type { TabType } from '../../types'

  export let tabs: TabType[]
  let tempTabs = structuredClone(tabs)
</script>

<div>Update tab drawer</div>
