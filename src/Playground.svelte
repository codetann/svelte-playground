<script>
  import Counter from "./stores/counter/Counter.svelte";
  import FormInput from "./components/form/FormInput.svelte";
  import Form from "./components/form/Form.svelte";

  import Login from "./pages/login/Login.svelte";
  import { Button, IconButton } from "./ui/button";
  import { Dropdown } from "./ui/dropdown";
  import { InfoCard } from "./ui/alert";
  import { Select, SelectItem } from "./ui/select";
  import { Input } from "./ui/input";

  import Test from "./Test.svelte";

  let isActive = false;

  const toggle = () => (isActive = !isActive);
</script>

<div class="p-5">
  <div>
    <Button>Primary</Button>
    <Select>
      <SelectItem>Tanner Thomas</SelectItem>
      <SelectItem>Cheyanne Thomas</SelectItem>
    </Select>
    <Dropdown />
  </div>
</div>

<style>
  /* your styles go here */
  div {
    display: flex;
    background: #d1d5db;
  }
</style>
