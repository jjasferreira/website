<script lang="ts">
  let { data }: { data: any } = $props();
</script>

<div
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h1
    class="pb-1.5 text-3xl font-bold text-black dark:text-white flex gap-3 items-center"
  >
    <img
      src="/jjasferreira.png"
      alt={data.name}
      class="object-cover w-20 h-20 rounded-full shrink-0"
    />
    {data.name}
  </h1>
  <p class="py-0.5 text-xs text-mist-800 dark:text-mist-200">
    {data.about}
  </p>
</div>
