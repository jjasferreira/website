<script lang="ts">
  const icons = import.meta.glob("../icons/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
  let {
    title = "Skills",
    fields,
    programming,
    tools,
    frameworks,
  }: {
    title?: string;
    fields: any[];
    programming: any[];
    tools: any[];
    frameworks: any[];
  } = $props();
</script>

<div
  class="rounded-xl border-2 border-mist-200 bg-white px-6 pt-4 pb-3 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <!-- Fields -->
  <h3
    class="text-mist-500 text-[13px] font-medium border-mist-200 dark:border-mist-800 pb-0.75"
  >
    Fields
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each fields.slice().sort() as field}
      <p class="text-xs text-mist-800 dark:text-mist-200">
        {field}
      </p>
    {/each}
  </div>
  <!-- Programming -->
  <h3
    class="text-mist-500 text-[13px] font-medium border-t border-mist-200 dark:border-mist-800 pt-1.5 pb-0.75 mt-2"
  >
    Programming
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each programming.slice().sort((a, b) => b.level - a.level) as prog}
      {@const icon = icons["../icons/" + prog.icon]}
      <div
        style=" --color: {prog.color};
        --lightcolor: color-mix({prog.color}, white 30%);
        --darkcolor: color-mix(in srgb, {prog.color}, black 15%)"
        class="text-xs text-mist-700 dark:text-mist-300 flex items-center justify-between gap-2"
      >
        <a
          href={prog.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 transition hover:text-(--darkcolor) dark:hover:text-(--lightcolor) font-medium"
        >
          <div
            class="h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
          >
            {@html icon}
          </div>
          <p>{prog.language}</p>
        </a>
        <div class="flex gap-1 text-right">
          {#each { length: 5 } as _, i}
            <div
              class="w-2 h-2 rounded-full"
              class:bg-(--darkcolor)={i < prog.level}
              class:dark:bg-(--lightcolor)={i < prog.level}
              class:bg-mist-200={i >= prog.level}
              class:dark:bg-mist-800={i >= prog.level}
            ></div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <!-- Tools -->
  <h3
    class="text-mist-500 text-[13px] font-medium border-t border-mist-200 dark:border-mist-800 pt-1.5 pb-0.75 mt-2"
  >
    Tools
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each tools.slice().sort((a, b) => b.level - a.level) as tool}
      {@const icon = icons["../icons/" + tool.icon]}
      <div
        style=" --color: {tool.color};
        --lightcolor: color-mix({tool.color}, white 30%);
        --darkcolor: color-mix(in srgb, {tool.color}, black 15%)"
        class="text-xs text-mist-700 dark:text-mist-300 flex items-center justify-between gap-2"
      >
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 transition hover:text-(--darkcolor) dark:hover:text-(--lightcolor) font-medium"
        >
          <div
            class="h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
          >
            {@html icon}
          </div>
          <p>{tool.language}</p>
        </a>
        <div class="flex gap-1 text-right">
          {#each { length: 5 } as _, i}
            <div
              class="w-2 h-2 rounded-full"
              class:bg-(--darkcolor)={i < tool.level}
              class:dark:bg-(--lightcolor)={i < tool.level}
              class:bg-mist-200={i >= tool.level}
              class:dark:bg-mist-800={i >= tool.level}
            ></div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <!-- Frameworks -->
  <h3
    class="text-mist-500 text-[13px] font-medium border-t border-mist-200 dark:border-mist-800 pt-1.5 pb-0.75 mt-2"
  >
    Frameworks
  </h3>
  <div class="space-y-0.75 flex flex-col">
    {#each frameworks.slice().sort((a, b) => b.level - a.level) as framework}
      {@const icon = icons["../icons/" + framework.icon]}
      <div
        style=" --color: {framework.color};
        --lightcolor: color-mix({framework.color}, white 30%);
        --darkcolor: color-mix(in srgb, {framework.color}, black 15%)"
        class="text-xs text-mist-700 dark:text-mist-300 flex items-center justify-between gap-2"
      >
        <a
          href={framework.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1 transition hover:text-(--darkcolor) dark:hover:text-(--lightcolor) font-medium"
        >
          <div
            class="h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
          >
            {@html icon}
          </div>
          <p>{framework.language}</p>
        </a>
        <div class="flex gap-1 text-right">
          {#each { length: 5 } as _, i}
            <div
              class="w-2 h-2 rounded-full"
              class:bg-(--darkcolor)={i < framework.level}
              class:dark:bg-(--lightcolor)={i < framework.level}
              class:bg-mist-200={i >= framework.level}
              class:dark:bg-mist-800={i >= framework.level}
            ></div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
