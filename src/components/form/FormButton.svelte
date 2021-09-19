<script>
  export let variant;
  export let size;

  $: switch (variant) {
    case "primary":
      variant =
        "items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
    case "secondary":
      variant =
        "items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
    default:
      variant =
        "items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 tracking-wide";
      break;
  }

  $: switch (size) {
    case "lg":
      size = "col-span-full";
      break;
    case "md":
      size = "col-span-6 sm:col-span-3";
      break;
    case "sm":
      size = "col-span-6 sm:col-span-3 lg:col-span-2";
      break;
    default:
      size = "col-span-6 sm:col-span-3";
      break;
  }
</script>

<button on:click class={`${size} ${variant}`}><slot /></button>

<style>
  /* your styles go here */
</style>
