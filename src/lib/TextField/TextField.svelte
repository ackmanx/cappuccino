<!--
┌─┐┌─┐┬─┐┬┌─┐┌┬┐
└─┐│  ├┬┘│├─┘ │
└─┘└─┘┴└─┴┴   ┴
-->
<script lang="ts">
  // Props
  export let label: string
  export let value: string | undefined
</script>

<!--
┌─┐┌─┐┌─┐
│  └─┐└─┐
└─┘└─┘└─┘
-->
<style>
  section {
    margin: 1rem 0 2rem;
  }

  input {
    height: 4rem;
    border: 0.2rem solid var(--color-text);
    border-radius: 10px;
    padding: 0 1.2rem;
    width: 100%;
  }

  label {
    margin-bottom: 0.4rem;
    display: block;
  }
</style>

<!--
┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐
 │ ├┤ │││├─┘│  ├─┤ │ ├┤
 ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘
-->
<section>
  <label for={label}>{label}</label>
  <input id={label} type="text" {value} />
</section>
