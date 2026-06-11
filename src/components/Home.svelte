<script lang="ts">
  import Button from "@components/Button.svelte";
  import Theme from "@components/Theme.svelte";
  import Footer from "@components/Footer.svelte";

  import profile from "@content/profile.json";

  import fileuser from "@assets/icons/ui/fileuser.svg?raw";
</script>

<div
  class="p-5 bg-mist-50 dark:bg-mist-900 flex flex-col items-center min-h-screen"
>
  <div class="mb-4">
    <Theme iconClass="p-px" />
  </div>

  <div class="min-h-145 flex flex-col justify-center gap-4">
    <section
      id="profile"
      class="flex flex-col items-center justify-center aspect-square text-center p-6 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
    >
      <div class="w-42 h-42 overflow-hidden rounded-full mb-4">
        <img
          src={"../src/assets/images/" + profile.avatar}
          alt={profile.name}
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h1 class="text-3xl font-bold text-black dark:text-white mb-2">
        {profile.name}
      </h1>
      <p class="text-base text-mist-500">
        {profile.headline}
      </p>
    </section>

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
