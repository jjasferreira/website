<script lang="ts">
  let { title = "Projects", projects }: { title?: string; projects: any } =
    $props();
  import skills from "../content/skills.json";
  const icons = import.meta.glob("../icons/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
</script>

<div
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <div class="space-y-2">
    {#each Object.entries(projects as Record<string, any>) as [section, subprojects], i}
      <div>
        <h3
          class="text-mist-500 text-[13px] font-medium pb-0.75 {i === 0
            ? ''
            : 'border-t border-mist-200 dark:border-mist-800 pt-1.5 mt-2'}"
        >
          {section[0].toUpperCase() + section.slice(1)}
        </h3>
        <div class="grid @xl:grid-cols-3 auto-rows-max">
          {#each Object.entries(subprojects as Record<string, any>) as [title, project], i}
            {@const icon = icons["../icons/" + project.icon]}
            <div
              class="border-mist-200 dark:border-mist-800
              pb-1.5 border-t pt-2 first:border-t-0 first:pt-0
              @xl:border-l @xl:px-3 @xl:nth-[-n+3]:border-t-0 @xl:nth-[-n+3]:pt-0
              @xl:nth-[3n+1]:border-l-0 @xl:nth-[3n+1]:pl-0 @xl:nth-[3n]:pr-0
            "
            >
              <!-- Title -->
              <div class="flex justify-between items-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.25 transition hover:opacity-80"
                >
                  <div class="w-3.75 h-4 pb-px">
                    {@html icon}
                  </div>
                  <h4
                    class="pb-0.5 text-[13.25px] font-semibold text-black dark:text-white"
                  >
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
                      {@const icon = icons["../icons/" + item.icon]}
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
      </div>
    {/each}
  </div>
</div>
