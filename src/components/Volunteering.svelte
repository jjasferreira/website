<script lang="ts">
  import volunteering from "@content/volunteering.json";
  let { title = "Volunteering" }: { title?: string } = $props();
</script>

<section
  id={title.toLowerCase()}
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div>
    {#each Object.values(volunteering as Record<string, any>) as volunteer, i}
      <div
        class={i === 0
          ? "flex flex-row gap-3 pt-1"
          : "mt-1.5 flex flex-row gap-3 border-t border-mist-200 dark:border-mist-800 pt-1.5"}
      >
        <div class="min-w-0 grow">
          <!-- Details -->
          <div
            class="text-[12px] sm:text-[13px] flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3>
                {#if volunteer.title}
                  <span class="font-semibold text-mist-800 dark:text-mist-200"
                    >{volunteer.title}
                  </span>
                {/if}
                {#if volunteer.subtitle}
                  <span class="text-mist-600 dark:text-mist-400 font-medium">
                    <a
                      href={volunteer.subtitleurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="transition hover:opacity-80"
                    >
                      · {volunteer.subtitle}
                    </a>
                  </span>
                {/if}
              </h3>
            </div>
            <div class="text-mist-500 sm:text-right">
              <h5>
                {#if volunteer.time}
                  <span>{volunteer.time}</span>
                {/if}
                {#if volunteer.location}
                  <span> · {volunteer.location}</span>
                {/if}
              </h5>
            </div>
          </div>
          <!-- Heading -->
          {#if volunteer.heading}
            <h6
              class="pt-0.5 pb-0.75 sm:py-0.75 text-[11px] sm:text-xs font-medium text-mist-600 dark:text-mist-400"
            >
              <a
                href={volunteer.headingurl}
                target="_blank"
                rel="noopener noreferrer"
                class="transition hover:opacity-80"
              >
                {volunteer.heading}
              </a>
            </h6>
          {/if}
          <!-- Description -->
          {#if volunteer.description}
            <p
              class="py-0.75 text-[11px] sm:text-xs text-mist-800 dark:text-mist-200"
            >
              {volunteer.description}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
