<script lang="ts">
  import profile from "@content/profile.json";
</script>

<section
  id="profile"
  class="flex flex-col items-center justify-center p-6 text-center bg-white border-2 aspect-square rounded-2xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <div class="mb-4 overflow-hidden rounded-full w-42 h-42">
    <img
      src={"images/" + profile.avatar}
      alt={profile.name}
      class="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
    />
  </div>
  <h1 class="mb-2 text-3xl font-bold text-black dark:text-white">
    {profile.name}
  </h1>
  <p class="text-base text-mist-500">
    {profile.headline}
  </p>
</section>
