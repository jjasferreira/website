<script lang="ts">
  import {
    Python,
    Bash,
    Html5,
    Postgresql,
    CPlusPlus,
    Java,
    Javascript,
    Css3,
  } from "@boxicons/svelte";
  import { Code } from "lucide-svelte";
  let {
    title = "Skills",
    fields,
    programming,
  }: {
    title?: string;
    fields: any[];
    programming: any[];
  } = $props();

  const icons: Record<string, any> = {
    Python,
    Bash,
    Html5,
    Postgresql,
    CPlusPlus,
    Java,
    Javascript,
    Css3,
  };
</script>

<div
  class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <!-- Fields -->
  <h3
    class="text-gray-500 text-[13px] font-medium border-gray-200 dark:border-gray-800 pb-0.75"
  >
    Fields
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each fields.slice().sort() as field}
      <div class="text-xs text-gray-800 dark:text-gray-200">
        {field}
      </div>
    {/each}
  </div>
  <!-- Programming -->
  <h3
    class="text-gray-500 text-[13px] font-medium border-t border-gray-200 dark:border-gray-800 pt-1.5 pb-0.75 mt-2"
  >
    Programming
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each programming.slice().sort((a, b) => b.level - a.level) as prog}
      {@const Icon = icons[prog.icon]}
      <div
        style=" --color: {prog.color};
        --lightcolor: color-mix({prog.color}, white 30%);
        --darkcolor: color-mix(in srgb, {prog.color}, black 15%)"
        class="text-xs text-gray-700 dark:text-gray-300 flex items-center justify-between gap-2"
      >
        <a
          href={prog.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 transition hover:text-(--darkcolor) dark:hover:text-(--lightcolor) font-medium"
        >
          {#if Icon}
            <Icon removePadding class="h-3.5 w-3.5" />
          {:else}
            <Code class="h-3.5 w-3.5" />
          {/if}
          <p>{prog.language}</p>
        </a>
        <div class="flex gap-1 text-right">
          {#each { length: 5 } as _, i}
            <div
              class="w-2 h-2 rounded-full"
              class:bg-(--darkcolor)={i < prog.level}
              class:dark:bg-(--lightcolor)={i < prog.level}
              class:bg-gray-200={i >= prog.level}
              class:dark:bg-gray-800={i >= prog.level}
            ></div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
