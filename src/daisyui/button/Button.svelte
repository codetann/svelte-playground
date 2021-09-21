<script>
  export let size = "md";
  export let variant = "primary";
  export let color = "primary";
</script>

<button class={`btn btn-${size} `}>
  <slot />
</button>
