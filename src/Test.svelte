<script>
  export let size = "md";

  $: switch (size) {
    case "md":
      size = "this is md";
      break;
    case "lg":
      size = "this is lg";
      break;
    default:
      break;
  }
</script>

<div on:click={() => console.log(size)} />

<style>
  div {
    height: 10rem;
    width: 10rem;
  }
</style>
