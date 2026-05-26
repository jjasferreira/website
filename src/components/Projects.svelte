<script lang="ts">
  const icons = import.meta.glob("../icons/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
  let {
    title = "Projects",
    projects,
    skills,
  }: { title?: string; projects: any; skills: any } = $props();
</script>

<div
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <div class="space-y-2">
    {#each projects.university as project, i}
      {@const icon = icons["../icons/" + project.icon]}
      <div
        class={i === 0
          ? "pt-1"
          : "border-t border-mist-200 dark:border-mist-800 pt-2"}
      >
        <!-- Title -->
        <h3 class="text-sm font-semibold text-black dark:text-white">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 transition hover:opacity-80"
          >
            <div class="w-4 h-4">
              {@html icon}
            </div>
            {project.title}
          </a>
        </h3>
        <!-- Description -->
        <p class="py-0.75 text-xs text-mist-800 dark:text-mist-200">
          {project.description}
        </p>
        <!-- Technologies -->
        <div class="flex flex-wrap gap-1 py-0.75">
          {#each ["frameworks", "programming", "tools"] as section}
            {#each project[section] ?? [] as tech}
              {@const item = skills[section][tech]}
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
      </div>
    {/each}
  </div>
</div>
