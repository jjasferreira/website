<script lang="ts">
  import Theme from "@components/Theme.svelte";
  import Card from "@components/Card.svelte";
  import Button from "@components/Button.svelte";
  import Footer from "@components/Footer.svelte";

  import fileuser from "@icons/ui/fileuser.svg?raw";
</script>

<div
  class="p-5 bg-mist-50 dark:bg-mist-900 flex flex-col items-center min-h-screen"
>
  <div class="mb-4">
    <Theme iconClass="p-px" />
  </div>

  <div class="min-h-145 flex flex-col justify-center gap-4">
    <Card />

    <div class="flex flex-col items-center">
      <Button
        id="resume"
        ariaLabel="View my resume"
        icon={fileuser}
        title="View my resume"
        onclick={() => window.location.assign("/resume")}
      />
    </div>
  </div>

  <Footer />
</div>
