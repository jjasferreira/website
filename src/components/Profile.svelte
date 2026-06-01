<script lang="ts">
  import profile from "../content/profile.json";
</script>

<div
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h1
    class="pb-1.5 text-3xl font-bold text-black dark:text-white flex gap-3 items-center"
  >
    <img
      src="/jjasferreira.png"
      alt={profile.name}
      class="object-cover w-20 h-20 rounded-full shrink-0"
    />
    {profile.name}
  </h1>
  <p class="py-0.5 text-xs text-mist-800 dark:text-mist-200">
    {profile.about}
  </p>
</div>
