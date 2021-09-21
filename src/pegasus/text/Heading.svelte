<script>
  export let variant = "h1";
</script>

{#if variant === "h1"}
  <h1><slot /></h1>
{/if}

<style>
  h1 {
    font-size: 64px;
    letter-spacing: 1px;
    line-height: 66px;
    font-weight: bold;
  }
</style>
