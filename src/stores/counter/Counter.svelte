<script>
  import { count } from "./counterStore";
  import Button from "../../components/button/Button.svelte";
</script>

<h1>The count is {$count}</h1>

<Button on:click={count.inc}>+</Button>
<Button on:click={count.dec}>-</Button>
<Button variant="primary" on:click={count.reset}>Button</Button>
