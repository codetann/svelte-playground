<script>
  import { Button } from "./daisyui/button";
</script>

<div>
  <div class="badge bg-red-600">Netflix</div>
  <div class="badge bg-green-600">Hulu</div>
  <div class="badge bg-blue-500">Amazon Prime</div>
  <Button variant="secondary">Watch Trailer</Button>
  <div class="dropdown">
    <div tabindex="0" class="m-1 max-h-10 btn">Dropdown</div>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content  rounded-box w-52 bg-gray-800"
    >
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
</div>

<style>
  /* your styles go here */
</style>
