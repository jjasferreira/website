<script lang="ts">
  let { title = "Volunteering" }: { title?: string } = $props();
  import volunteering from "../content/volunteering.json";
</script>

<div
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div>
    {#each Object.values(volunteering as Record<string, any>) as volunteer, i}
      <div
        class={i === 0
          ? "flex flex-row gap-3 pt-1.25"
          : "mt-1.5 flex flex-row gap-3 border-t border-mist-200 dark:border-mist-800 pt-1.5"}
      >
        <div class="min-w-0 grow">
          <!-- Details -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex items-center gap-1">
              <h3
                class="pb-0.5 text-sm font-semibold text-mist-800 dark:text-mist-200"
              >
                <a
                  href={volunteer.titleurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {volunteer.title}
                </a>
              </h3>
              <h4
                class="text-[13px] text-mist-600 dark:text-mist-400 font-medium"
              >
                {#if volunteer.subtitleurl}
                  <a
                    href={volunteer.subtitleurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition hover:opacity-80"
                  >
                    · {volunteer.subtitle}
                  </a>
                {:else}
                  · {volunteer.subtitle}
                {/if}
              </h4>
            </div>
            <div class="text-[13px] text-mist-500 sm:text-right">
              <h5>
                {volunteer.time} · {volunteer.location}
              </h5>
            </div>
          </div>
          <!-- Heading -->
          {#if volunteer.heading}
            <h6
              class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-mist-600 dark:text-mist-400"
            >
              {#if volunteer.headingurl}
                <a
                  href={volunteer.headingurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition hover:opacity-80"
                >
                  {volunteer.heading}
                </a>
              {:else}
                {volunteer.heading}
              {/if}
            </h6>
          {/if}
          <!-- Description -->
          {#if volunteer.description}
            <p class="py-0.75 text-xs text-mist-800 dark:text-mist-200">
              {volunteer.description}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
