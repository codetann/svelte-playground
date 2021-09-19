<script>
  export let variant;

  $: switch (variant) {
    case "primary":
      variant =
        "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
    case "secondary":
      variant =
        "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
    default:
      variant =
        "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
  }
</script>

<button on:click class={variant}><slot /></button>

<style>
  /* your styles go here */
</style>
