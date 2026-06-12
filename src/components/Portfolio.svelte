<script lang="ts">
  let { title = "Portfolio" }: { title?: string } = $props();
  import { academic } from "@content/projects.json";
  import skills from "@content/skills.json";
  const projects: Record<string, any> = {
    academic: academic,
  };
  const icons = import.meta.glob("../icons/tech/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  function paginateIds(arr: any[], size: number) {
    let pages = [];
    for (let i = 0; i < arr.length; i += size) {
      pages.push(arr.slice(i, i + size));
    }
    return pages;
  }

  let pages: Record<string, any[]> = {};
  for (let section in projects) {
    let ids = Object.keys(projects[section]);
    pages[section] = paginateIds(ids, 6);
  }

  let currentPage = $state<Record<string, number>>({});
  function handleScroll(e: Event, section: string) {
    const el = e.currentTarget as HTMLElement;
    currentPage[section] = Math.round(el.scrollLeft / el.clientWidth);
  }
</script>

<section
  id={title.toLowerCase()}
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  {#each Object.entries(projects as Record<string, any>) as [section, sectionprojects], i}
    <div id={section}>
      <h3
        class="text-mist-500 text-[13px] font-medium pb-0.75 capitalize {i === 0
          ? ''
          : 'border-t border-mist-200 dark:border-mist-800 pt-1.5'}"
      >
        {section}
      </h3>
      <!-- Grid -->
      <div
        onscroll={(e) => handleScroll(e, section)}
        class="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {#each pages[section] as page, pageId}
          <div
            id={String(pageId)}
            class="grid w-full grid-cols-3 grid-rows-2 shrink-0 snap-center"
          >
            {#each page as id}
              {@const project = sectionprojects[id]}
              {@const icon = icons["../icons/tech/" + project.icon]}
              <div
                class="border-mist-200 dark:border-mist-800 nth-[+n+4]:border-t nth-[+n+4]:pt-2
              not-nth-[3n+1]:border-l px-3 nth-[3n+1]:pl-0 nth-[3n]:pr-0"
              >
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
                      {id}
                    </h4>
                  </a>
                  <span class="text-[10.5px] text-mist-500">{project.time}</span
                  >
                </div>
                <p class="text-xs text-mist-800 dark:text-mist-200 pb-0.75">
                  {project.description}
                </p>
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
                            aria-label={item.name}
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
        {/each}
      </div>
      <!-- Pagination -->
      {#if pages[section]?.length > 1}
        <div class="flex justify-center gap-1.5 pt-3 pb-0.75">
          {#each pages[section] as _, pageId}
            <button
              aria-label="go to page {pageId + 1}"
              class="cursor-pointer h-2 rounded-full transition-all duration-300 {(currentPage[
                section
              ] ?? 0) === pageId
                ? 'w-3.5 bg-mist-600 dark:bg-mist-300'
                : 'w-2 bg-mist-300 dark:bg-mist-600'}"
              onclick={() => {
                document.getElementById(`${pageId}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
              }}
            ></button>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</section>
