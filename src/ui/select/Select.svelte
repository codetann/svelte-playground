<script>
  import { fade, slide, blur, scale } from "svelte/transition";
  import { cubicInOut, circInOut, quintInOut } from "svelte/easing";
  import { onMount } from "svelte";

  let isActive = false;
  const handleActive = () => (isActive = !isActive);

  onMount(() => {
    window.addEventListener("click", (e) => {
      if (isActive) {
        if (document.getElementById("list").contains(e.target)) {
          handleActive();
        }
      }
    });
  });
</script>

<div class="w-64">
  <div class=" relative">
    <button
      on:click={handleActive}
      type="button"
      class=" cursor-pointer relative w-full  bg-white transition ease-in duration-200 rounded-md pl-3 pr-10 py-2 px-4   text-left  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 focus:ring-offset-indigo-200 sm:text-sm"
    >
      <span class="flex items-center">
        <span class="ml-3 block truncate"> John Jackson </span>
      </span>
      <span
        class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>
    {#if isActive}
      <div
        class="absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg"
        transition:scale={{
          duration: 200,
          opacity: 0,
          start: 0.9,
          easing: quintInOut,
        }}
      >
        <ul
          id="list"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          <slot />
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  /* your styles go here */
</style>
