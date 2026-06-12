<script lang="ts">
  let { title = "History", history }: { title?: string; history: any } =
    $props();
  import { concepts } from "@content/skills.json";
  import { dark } from "../theme.js";
  const icons = import.meta.glob("../icons/**/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
</script>

<section
  id={title.toLowerCase()}
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div>
    {#each Object.values(history as Record<string, any>) as hist, i}
      <div
        style=" --color: {hist.color};
                        --lightcolor: color-mix({hist.color}, white 20%);
                        --darkcolor: color-mix(in srgb, {hist.color}, black 10%)"
        class={i === 0
          ? "flex flex-row gap-3 pt-1.5"
          : "mt-2 flex flex-row gap-3 border-t border-mist-200 dark:border-mist-800 pt-2"}
      >
        <!-- Logo -->
        {#if hist.logo}
          <div class="shrink-0">
            <a href={hist.logourl} target="_blank" rel="noopener noreferrer">
              <img
                class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80 dark:bg-(--darkcolor)/90"
                src={$dark
                  ? "/images/dark/" + hist.logo
                  : "/images/light/" + hist.logo}
                alt={hist.logoalt}
              />
            </a>
          </div>
        {/if}
        <div class="min-w-0 grow">
          <!-- Title, subtitle, time, location -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3
                class="text-base font-semibold text-black transition dark:text-white hover:opacity-80"
              >
                <a
                  href={hist.titleurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hist.title}
                </a>
              </h3>
              <h4 class="text-sm font-medium text-mist-800 dark:text-mist-200">
                {#if hist.subtitleurl}
                  <a
                    href={hist.subtitleurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition hover:opacity-80"
                  >
                    {hist.subtitle}
                  </a>
                {:else}
                  {hist.subtitle}
                {/if}
              </h4>
            </div>
            <div class="text-sm text-mist-500 sm:text-right">
              <h5 class="sm:pt-1">
                {hist.time}
              </h5>
              <h5>{hist.location}</h5>
            </div>
          </div>
          <!-- Heading -->
          {#if hist.heading}
            <h6
              class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-mist-600 dark:text-mist-400"
            >
              {#if hist.headingurl}
                <a
                  href={hist.headingurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition hover:opacity-80"
                >
                  {hist.heading}
                </a>
              {:else}
                {hist.heading}
              {/if}
            </h6>
          {/if}
          <!-- Concepts -->
          {#if hist.concepts}
            <div class="flex flex-wrap gap-2 py-0.75">
              {#each hist.concepts as concept}
                <span
                  class="group relative inline-block rounded-full border border-(--darkcolor)/33 dark:border-(--lightcolor)/33 bg-(--lightcolor)/7.5 dark:bg-(--darkcolor)/10 text-(--darkcolor) dark:text-(--lightcolor) px-2 pt-0.5 pb-[3.5px] text-[11px] font-medium cursor-help"
                >
                  {concepts[concept as keyof typeof concepts]?.name}
                  <span
                    class="absolute bottom-full left-1/2 z-20 mb-2 hidden group-hover:block w-48 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-center text-[10px] font-normal leading-tight text-white normal-case shadow-xl pointer-events-none whitespace-normal"
                  >
                    <span
                      class="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-gray-900"
                    ></span>

                    {concepts[concept as keyof typeof concepts]?.ccs}
                  </span>
                </span>
              {/each}
            </div>
          {/if}
          <!-- Description -->
          {#if hist.description}
            <p class="py-0.75 text-xs text-mist-800 dark:text-mist-200">
              {hist.description}
            </p>
          {/if}
          <!-- Media -->
          {#if hist.media}
            <div class="flex flex-wrap gap-x-3 gap-y-1 py-0.75">
              {#each hist.media as media}
                {@const icon = icons["../icons/" + media.icon]}
                {#if media.url}
                  <a
                    href={"docs/" + media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) transition hover:opacity-80 dark:text-(--lightcolor)"
                  >
                    <div class="min-w-3 h-3 [&_svg]:h-full [&_svg]:w-full">
                      {@html icon}
                    </div>
                    <span>{media.title}</span>
                  </a>
                {:else}
                  <span
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) dark:text-(--lightcolor)"
                  >
                    <div class="min-w-3 h-3 [&_svg]:h-full [&_svg]:w-full">
                      {@html icon}
                    </div>
                    <span>{media.title}</span>
                  </span>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
