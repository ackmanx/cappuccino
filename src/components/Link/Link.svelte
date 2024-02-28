<script>
  export let href
  export let title = ''
</script>

<a {href} {title}> <slot /><span /></a>

<style>
  a {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    border-radius: 0.3rem;
  }

  a {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }

  a:hover {
    background-color: var(--color-main-background);
  }

  span {
    border-top: 0.2rem solid transparent;
  }
</style>
