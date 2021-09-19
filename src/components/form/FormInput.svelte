<script>
  export let type = "text";
  export let label = "";
  export let size = "full";

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

<div class={size}>
  <label for="input" class="block text-sm font-medium text-gray-700"
    >{label}</label
  >
  <input
    name="input"
    on:change
    {type}
    class="mt-1 focus:ring-1 focus:ring-indigo-500 focus:border-transparant block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md p-2"
  />
</div>

<!-- <input type="text" class="border p-4" /> -->
<style>
  /* your styles go here */
</style>
