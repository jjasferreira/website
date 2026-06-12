<script lang="ts">
  import profile from "@content/profile.json";
</script>

<section
  id="profile"
  class="flex flex-col items-center justify-center aspect-square text-center p-6 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <div class="w-42 h-42 overflow-hidden rounded-full mb-4">
    <img
      src={"/images/" + profile.avatar}
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
