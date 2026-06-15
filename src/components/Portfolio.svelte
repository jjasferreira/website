<script lang="ts">
  import { academic } from "@content/projects.json";
  import skills from "@content/skills.json";
  let { title = "Portfolio" }: { title?: string } = $props();
  const projects: Record<string, any> = { academic };
  const icons = import.meta.glob("../icons/tech/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  let scrollPositions = $state<Record<string, { left: number; width: number }>>({});
</script>

<section
  id={title.toLowerCase()}
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  
  {#each Object.entries(projects) as [section, sectionprojects], i}
    {@const items = Object.entries(sectionprojects)}
    {@const pos = scrollPositions[section] || { left: 0, width: 1 }}
    {@const activePage = Math.round(pos.left / (pos.width || 1))}

    <div id={section}>
      <h3 class="text-mist-500 text-[13px] font-medium pb-0.75 capitalize {i === 0 ? '' : 'border-t border-mist-200 dark:border-mist-800 pt-1.5'}">
        {section}
      </h3>
      
      {let el = undefined}
      <div
        bind:this={el}
        onscroll={(e) => {
          const target = e.currentTarget as HTMLElement;
          scrollPositions[section] = { left: target.scrollLeft, width: target.clientWidth };
        }}
        class="grid grid-rows-2 grid-flow-col auto-cols-[100%] xs:auto-cols-[50%] md:auto-cols-[33.333%] overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      >
        {#each items as [id, project]}
          {@const proj = project as Record<string, any>}
          {@const icon = icons["../icons/tech/" + proj.icon]}
          <div
            class="snap-start border-mist-200 dark:border-mist-800 pb-1.5 even:border-t even:pt-2
                   xs:nth-[4n+1]:pr-3 xs:nth-[4n+2]:pr-3 xs:nth-[4n+3]:border-l xs:nth-[4n+3]:pl-3
                   xs:nth-[4n]:border-l xs:nth-[4n]:pl-3
                   md:nth-[6n+1]:border-l-0 md:nth-[6n+1]:pl-0 md:not-nth-[6n+1]:border-l md:not-nth-[6n+1]:pl-3
                   md:nth-[6n+2]:border-l-0 md:nth-[6n+2]:pl-0 md:not-nth-[6n+2]:border-l md:not-nth-[6n+2]:pl-3
                   md:nth-[6n+5]:pr-0 md:not-nth-[6n+5]:pr-3 md:nth-[6n]:pr-0 md:not-nth-[6n]:pr-3"
          >
            <div class="flex items-center justify-between text-black dark:text-white">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.25 transition hover:opacity-80"
              >
                <div class="w-4 h-4">{@html icon}</div>
                <h4 class="pb-px text-sm font-semibold">{id}</h4>
              </a>
              <span class="text-[10.5px] text-mist-500">{proj.time}</span>
            </div>
            
            <p class="text-xs text-mist-800 dark:text-mist-200 pb-0.75">
              {proj.description}
            </p>

            {#if ["frameworks", "programming", "tools"].some((sec) => (proj[sec] ?? []).length > 0)}
              <div class="flex flex-wrap gap-1 py-0.75">
                {#each ["frameworks", "programming", "tools"] as sec}
                  {#each proj[sec] ?? [] as tech}
                    {@const item = (skills as any)[sec][tech]}
                    {@const techIcon = icons["../icons/tech/" + item.icon]}
                    <div
                      style="--color: {item.color};
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
                        <div class="h-3.5 w-3.5 p-px [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current">
                          {@html techIcon}
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

      {#if items.length > 2}
        {@const totalPagesDefault = Math.ceil(items.length / 2)}
        {@const totalPagesXS = Math.ceil(items.length / 4)}
        {@const totalPagesMD = Math.ceil(items.length / 6)}
        
        <div class="flex justify-center gap-1.5 pt-3 pb-0.75">
          {#each Array(totalPagesDefault) as _, pageId}
            <button
              aria-label="Go to page {pageId + 1}"
              class="cursor-pointer h-2 rounded-full transition-all duration-300
                     {activePage === pageId ? 'w-3.5 bg-mist-600 dark:bg-mist-300' : 'w-2 bg-mist-300 dark:bg-mist-600'}
                     {pageId >= totalPagesXS ? 'xs:hidden' : ''}
                     {pageId >= totalPagesMD ? 'md:hidden' : ''}"
              onclick={() => {
                if (el) {
                  el.scrollTo({
                    left: pageId * el.clientWidth,
                    behavior: "smooth"
                  });
                }
              }}
            ></button>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</section>