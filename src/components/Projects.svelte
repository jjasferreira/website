<script lang="ts">
  import { contributions, personal } from "@content/projects.json";
  import skills from "@content/skills.json";
  let { title = "Projects" }: { title?: string } = $props();
  const projects = {
    contributions: contributions,
    personal: personal,
  };
  const icons = import.meta.glob("../icons/tech/*.svg", {
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

  {#each Object.entries(projects as Record<string, any>) as [section, subprojects], i}
    <div id={section}>
      <h3
        class="text-mist-500 text-[13px] font-medium pb-0.75 capitalize {i === 0
          ? ''
          : 'border-t border-mist-200 dark:border-mist-800 pt-1.5'}"
      >
        {section}
      </h3>
      {#each Object.entries(subprojects as Record<string, any>) as [title, project], j}
        {@const icon = icons["../icons/tech/" + project.icon]}
        <div
          class="border-mist-200 dark:border-mist-800 pb-1.5 {j === 0
            ? 'border-t-0 pt-0'
            : 'border-t pt-2'}"
        >
          <!-- Title -->
          <div
            class="flex items-center justify-between text-black dark:text-white"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.25 transition hover:opacity-80"
            >
              <div class="w-4 h-4">
                {@html icon}
              </div>
              <h4 class="pb-px text-sm font-semibold">
                {title}
              </h4>
            </a>
            <span class="text-[10.5px] text-mist-500">{project.time}</span>
          </div>
          <!-- Description -->
          <p class="text-xs text-mist-800 dark:text-mist-200 pb-0.75">
            {project.description}
          </p>
          <!-- Technologies -->
          {#if ["frameworks", "programming", "tools"].some((sec) => (project[sec] ?? []).length > 0)}
            <div class="flex flex-wrap gap-1 py-0.75">
              {#each ["frameworks", "programming", "tools"] as sec}
                {#each project[sec] ?? [] as tech}
                  {@const item = (skills as any)[sec][tech]}
                  {@const icon = icons["../icons/tech/" + item.icon]}
                  <div
                    style=" --color: {item.color};
                    --lightcolor: color-mix({item.color}, white 30%);
                    --darkcolor: color-mix(in srgb, {item.color}, black 15%)"
                    class="flex items-center justify-between gap-2 text-xs text-mist-700 dark:text-mist-300"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      class="flex items-center gap-1 transition hover:text-(--darkcolor) dark:hover:text-(--lightcolor) font-medium"
                    >
                      <div
                        class="h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
                      >
                        {@html icon}
                      </div>
                    </a>
                  </div>
                {/each}
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</section>
