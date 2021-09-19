<script>
  export let size = "lg";

  $: switch (size) {
    case "xl":
      size = "shadow overflow-hidden sm:rounded-md max-w-4xl";
    case "lg":
      size = "shadow overflow-hidden sm:rounded-md max-w-2xl";
      break;
    case "md":
      size = "shadow overflow-hidden sm:rounded-md max-w-xl";
      break;
    case "sm":
      size = "shadow overflow-hidden sm:rounded-md max-w-lg";
      break;
    default:
      size = "shadow overflow-hidden sm:rounded-md max-w-2xl";
      break;
  }
</script>

<form action="">
  <div class={size}>
    <div class="px-4 py-5 bg-white sm:p-6">
      <div class="grid grid-cols-6 gap-6">
        <slot />
      </div>
    </div>
  </div>
</form>
