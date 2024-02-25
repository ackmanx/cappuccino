<script>
  export let href
  export let title = ''
</script>

<a {href} {title}> <slot /><span /></a>

<style>
  a {
    display: inline-flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  span {
    border-top: 0.2rem solid transparent;
  }

  a:hover span {
    border-top: 0.2rem solid var(--color-accent);
  }
</style>
