<script>
  import { scale } from "svelte/transition";
  import { cubicInOut, circInOut, quintInOut } from "svelte/easing";
  import { Button } from "../button";

  export let isActive = false;
</script>

{#if isActive}
  <div
    transition:scale={{
      duration: 200,
      opacity: 0,
      start: 0.9,
      easing: quintInOut,
    }}
    class="max-w-md max-h-56 px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 absolute"
  >
    <h2
      class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl"
    >
      Design Tools
    </h2>

    <p class="mt-2 text-gray-600 dark:text-gray-200">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
      deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi
      hic, suscipit in a veritatis pariatur minus consequuntur!
    </p>

    <div class="flex justify-end mt-4">
      <Button on:click={() => (isActive = false)}>Close</Button>
    </div>
  </div>
{/if}
