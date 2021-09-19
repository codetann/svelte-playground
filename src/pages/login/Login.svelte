<script>
  import Form from "../../components/form/Form.svelte";
  import FormInput from "../../components/form/FormInput.svelte";
  import FormButton from "../../components/form/FormButton.svelte";
  import Button from "../../components/button/Button.svelte";
</script>

<!-- markup (zero or more items) goes here -->
<div
  class="w-full min-w-full h-full min-h-screen flex justify-center items-center bg-gray-50"
>
  <Form size="lg">
    <FormInput size="lg" label="Email" type="email" />
    <FormInput size="lg" label="Password" type="password" />
    <FormButton size="lg" variant="primary">Sign in</FormButton>
  </Form>
</div>

<style>
  /* your styles go here */
</style>
