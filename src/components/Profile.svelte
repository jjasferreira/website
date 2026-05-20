<script lang="ts">
  let { data }: { data: any } = $props();
</script>

<div
  class="rounded-xl border-2 border-mist-200 bg-white px-6 pt-4 pb-3 dark:border-mist-800 dark:bg-mist-950"
>
  <h1
    class="text-3xl font-bold text-black dark:text-white flex gap-3 items-center"
  >
    <img
      src="/jjasferreira.png"
      alt={data.name}
      class="h-20 w-20 rounded-full object-cover shrink-0"
    />
    {data.name}
  </h1>
  <p class="py-0.5 text-xs text-mist-800 dark:text-mist-200">
    {data.about}
  </p>
</div>
