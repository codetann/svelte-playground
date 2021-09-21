<script>
  // your script goes here
  let checked = true;

  $: checkClass = `checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transfrom translate-x-4`;
</script>

<div class="mb-3">
  <div class="relative inline-block w-10 mr-2 align-middle select-none">
    <input
      bind:checked
      type="checkbox"
      name="toggle"
      id="Blue"
      class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transform translate-x-4"
    />
    <label
      for="Blue"
      class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer "
    />
  </div>
  <span class="text-gray-400 font-medium"> Blue </span>
</div>
