<script lang="ts">
  let { title = "Skills" }: { title?: string } = $props();
  import skills from "../content/skills.json";
  const sections = ["frameworks", "programming", "tools"] as const;
  const icons = import.meta.glob("../icons/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
</script>

<section
  id={title.toLowerCase()}
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <!-- Fields -->
  <div id="fields">
    <h3 class="text-mist-500 text-[13px] font-medium pb-0.75">Fields</h3>
    <div class="space-y-0.75 flex flex-col">
      {#each Object.values(skills.fields)
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name)) as field}
        <p class="text-xs text-mist-800 dark:text-mist-200">
          {field.name}
        </p>
      {/each}
    </div>
  </div>
  <!-- Frameworks, Programming, Tools -->
  {#each sections as section}
    <div id={section}>
      <h3
        class="text-mist-500 text-[13px] font-medium pb-0.75 border-t border-mist-200 dark:border-mist-800 pt-1.5 mt-2 capitalize"
      >
        {section}
      </h3>
      <div class="space-y-0.75 flex flex-col">
        {#each Object.values(skills[section])
          .filter((item) => item.level >= 2)
          .sort((a, b) => b.level - a.level) as item}
          {@const icon = icons["../icons/" + item.icon]}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style=" --color: {item.color};
              --lightcolor: color-mix({item.color}, white 30%);
              --darkcolor: color-mix(in srgb, {item.color}, black 15%)"
            class="font-medium flex items-center justify-between gap-2 text-xs text-mist-700 dark:text-mist-300 hover:text-(--darkcolor) dark:hover:text-(--lightcolor)"
          >
            <div class="flex items-center">
              <div
                class="mr-1 h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
              >
                {@html icon}
              </div>
              <p>{item.name}</p>
            </div>
            <div class="flex gap-1 text-right">
              {#each { length: 5 } as _, i}
                <div
                  class="w-2 h-2 rounded-full"
                  class:bg-(--darkcolor)={i < item.level}
                  class:dark:bg-(--lightcolor)={i < item.level}
                  class:bg-mist-200={i >= item.level}
                  class:dark:bg-mist-800={i >= item.level}
                ></div>
              {/each}
            </div>
          </a>
        {/each}
      </div>
    </div>
  {/each}
  <!-- Languages -->
  <div id="languages">
    <h3
      class="text-mist-500 text-[13px] font-medium border-t border-mist-200 dark:border-mist-800 pt-1.5 pb-0.75 mt-2"
    >
      Languages
    </h3>
    <div class="space-y-0.75 flex flex-col">
      {#each Object.values(skills.languages) as item}
        <p
          class="flex items-center justify-between text-xs text-mist-700 dark:text-mist-200"
        >
          <span class="font-medium">{item.name}</span>
          <span class="text-right">{item.level}</span>
        </p>
      {/each}
    </div>
  </div>
</section>
