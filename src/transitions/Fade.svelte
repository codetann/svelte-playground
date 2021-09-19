<script>
  import { fade } from "svelte/transition";
</script>

<!-- markup (zero or more items) goes here -->
<div class="container">
  <div transition:fade>
    <slot />
  </div>
</div>

<style>
  .container {
    min-height: 10rem;
  }
</style>
