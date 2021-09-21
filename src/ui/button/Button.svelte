<script>
  export let withIcon = false;
</script>

{#if withIcon}
  <!-- content here -->
  <button
    on:click
    type="button"
    class="py-2 px-4 flex justify-center items-center h-12 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-auto  transition ease-in duration-200 text-center font-medium text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
  >
    <svg
      width="20"
      height="20"
      fill="currentColor"
      class="mr-2"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"
      />
    </svg>
    Upload
  </button>
{/if}

{#if !withIcon}
  <div>
    <button
      on:click
      type="button"
      class="px-4 py-2 font-medium text-sm border-transparent tracking-wide text-white capitalize transition ease-in duration-150 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 focus:ring-offset-blue-200  dark:focus:bg-gray-700 focus:ring-2 focus:ring-offset-2 "
    >
      <slot />
    </button>
  </div>
{/if}

<!-- {#if !withIcon}
  <button
    on:click
    type="button"
    class="py-2 px-4 h-10 text-sm space tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
  >
    <slot />
  </button>
{/if} -->
