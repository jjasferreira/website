<script lang="ts">
  import { Code } from "lucide-svelte";
  import { Github } from "@boxicons/svelte";
  let { title = "Projects", projects }: { title?: string; projects: any } =
    $props();
  const icons: Record<string, any> = {
    Github,
  };

  const languageColorMap = $derived(
    Object.fromEntries(
      projects.programming.map((lang: any) => [lang.language, lang.color]),
    ),
  );
</script>

<div
  class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <div class="space-y-2">
    {#each projects.university as project, i}
      <div
        class={i === 0
          ? "pt-1"
          : "border-t border-gray-200 dark:border-gray-800 pt-2"}
      >
        <!-- Project Title -->
        <h3 class="text-sm font-semibold text-black dark:text-white">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 transition hover:opacity-80"
          >
            {#if icons[project.icon]}
              {@const Icon = icons[project.icon]}
              <Icon removePadding class="h-4 w-4" />
            {:else}
              <Code strokeWidth={2.25} class="h-4 w-4" />
            {/if}
            {project.title}
          </a>
        </h3>

        <!-- Project Description -->
        <p class="py-0.75 text-[11px] text-gray-800 dark:text-gray-200">
          {project.description}
        </p>

        <!-- Programming Languages 
        {#if project.programming && project.programming.length > 0}
          <div class="pt-0.75 space-y-1">
            <div
              class="flex h-1.5 rounded-full overflow-hidden gap-0 bg-gray-200 dark:bg-gray-800"
            >
              {#each project.programming as lang}
                {@const color = languageColorMap[lang.language]}
                <div
                  class="transition-all"
                  style="flex-grow: {lang.percentage}; background-color: {color}"
                  title="{lang.language} {lang.percentage}%"
                ></div>
              {/each}
            </div>
            <div class="flex flex-wrap gap-2 text-[10px]">
              {#each project.programming as lang}
                {@const color = languageColorMap[lang.language]}
                <span class="text-gray-600 dark:text-gray-400">
                  <span style="color: {color}" class="font-medium"
                    >{lang.language}</span
                  >
                  {lang.percentage}%
                </span>
              {/each}
            </div>
          </div>
        {/if}
        -->
      </div>
    {/each}
  </div>
</div>
