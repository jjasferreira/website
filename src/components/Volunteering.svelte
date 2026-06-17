<script lang="ts">
  import volunteering from "@content/volunteering.json";
  let { title = "Volunteering" }: { title?: string } = $props();
</script>

<section
  id={title.toLowerCase()}
  class="px-5 py-3 bg-white border-2 rounded-2xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-1 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div class="flex flex-col gap-0.5">
    {#each Object.values(volunteering as Record<string, any>) as volunteer, i}
      <div
        class="flex py-0.75 {i === 0
          ? ''
          : 'border-t border-mist-200 dark:border-mist-800 pt-1'}"
      >
        <div class="min-w-0 grow">
          <!-- Details -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="text-[12px] sm:text-[13px]">
              <h3>
                {#if volunteer.title}
                  <span class="font-semibold text-mist-800 dark:text-mist-200"
                    >{volunteer.title}
                  </span>
                {/if}
                {#if volunteer.subtitle}
                  <span class="font-medium text-mist-600 dark:text-mist-400">
                    ·
                  </span>
                  <span class="font-medium text-mist-600 dark:text-mist-400">
                    <a
                      href={volunteer.subtitleurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block hover:opacity-90 underline-offset-[1.5px] hover:underline hover:-translate-y-px hover:translate-x-px"
                    >
                      {volunteer.subtitle}
                    </a>
                  </span>
                {/if}
              </h3>
            </div>
            <div
              class="text-[11.5px] sm:text-[12.5px] text-mist-500 sm:text-right"
            >
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
              class="pb-0.75 text-[11px] sm:text-xs text-mist-800 dark:text-mist-200"
            >
              {volunteer.description}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
