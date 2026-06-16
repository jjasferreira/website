<script lang="ts">
  import Theme from "@components/Theme.svelte";
  import Card from "@components/Card.svelte";
  import Button from "@components/Button.svelte";
  import Footer from "@components/Footer.svelte";

  import fileuser from "@icons/ui/fileuser.svg?raw";
</script>

<div
  class="flex flex-col items-center min-h-screen p-5 bg-mist-50 dark:bg-mist-900"
>
  <div class="mb-4">
    <Theme iconClass="p-px" />
  </div>

  <div class="flex flex-col justify-center gap-4 min-h-145">
    <Card />

    <div class="flex flex-col items-center">
      <Button
        id="resume"
        ariaLabel="View my resume"
        icon={fileuser}
        iconClass="p-px"
        title="View my resume"
        onclick={() =>
          window.location.assign(`${import.meta.env.BASE_URL}resume`)}
      />
    </div>
  </div>

  <div class="w-[90%]">
    <Footer
      text="Created by José João Ferreira"
      href="https://github.com/jjasferreira"
    />
  </div>
</div>
