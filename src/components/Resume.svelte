<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  let { data }: { data: any } = $props();
</script>

<div
  class="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 px-4 py-6"
>
  <div class="mx-auto max-w-3xl">
    <!-- Header Section -->
    <div
      class="mb-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10"
    >
      <h1 class="mb-2 text-4xl font-bold text-black dark:text-white">
        {data.name}
      </h1>
      <div class="mb-1 flex items-center justify-between">
        <div class="flex flex-wrap gap-4 text-gray-600">
          <a href="mailto:{data.email}" class="transition hover:opacity-80"
            >{data.email}</a
          >
          <span>{data.location}</span>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div
      class="mb-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 pt-4 pb-2"
    >
      <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
        Experience
      </h2>
      <div class="">
        {#each data.experience as exp, i}
          <div
            style="--color: {exp.color}"
            class={i === 0
              ? "flex gap-4 pt-1.5"
              : "mt-1 flex gap-4 border-t border-gray-200 dark:border-gray-800 pt-3"}
          >
            {#if exp.logo}
              <div class="shrink-0">
                <a href={exp.website} target="_blank" rel="noopener noreferrer">
                  <img
                    class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80"
                    src={exp.logo}
                    alt={exp.organization}
                  />
                </a>
              </div>
            {/if}
            <div class="grow">
              <div
                class="mb-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3
                    class="text-base font-semibold text-black dark:text-white"
                  >
                    {exp.title}
                  </h3>
                  <p
                    class="text-sm font-medium text-black dark:text-white transition hover:opacity-80"
                  >
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      >{exp.organization}{#if exp.type}
                        · {exp.type}{/if}</a
                    >
                  </p>
                </div>
                <div class="text-sm text-gray-500 sm:text-right">
                  <div class="sm:pt-1">
                    {exp.start} - {exp.end} · {exp.time}
                  </div>
                  <div>{exp.location} · {exp.setting}</div>
                </div>
              </div>
              {#if exp.description}
                <p class="mb-3 text-sm text-gray-800 dark:text-gray-300">
                  {exp.description}
                </p>
              {/if}
              {#if exp.skills}
                <div class="mb-3 flex flex-wrap gap-2">
                  {#each exp.skills as skill}
                    <span
                      class="inline-block rounded-full border border-(--color)/25 bg-(--color)/5 px-3 py-1 text-xs font-medium text-(--color)"
                      >{skill}</span
                    >
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Education Section -->
    <div
      class="mb-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 pt-4 pb-2"
    >
      <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
        Education
      </h2>
      <div>
        {#each data.education as edu, i}
          <div
            style="--color: {edu.color}"
            class={i === 0
              ? "flex gap-4 pt-1.5"
              : "mt-1 flex gap-4 border-t border-gray-200 dark:border-gray-800 pt-3"}
          >
            {#if edu.logo}
              <div class="shrink-0">
                <a href={edu.website} target="_blank" rel="noopener noreferrer">
                  <img
                    class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80"
                    src={edu.logo}
                    alt={edu.school}
                  />
                </a>
              </div>
            {/if}
            <div class="grow">
              <div
                class="mb-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3
                    class="text-base font-semibold text-black dark:text-white transition hover:opacity-80"
                  >
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer">{edu.school}</a
                    >
                  </h3>
                  <p class="text-sm font-medium text-black dark:text-white">
                    {edu.degree}{#if edu.field}, {edu.field}{/if}
                  </p>
                </div>
                <div class="text-sm text-gray-500 sm:text-right">
                  <div class="sm:pt-1">{edu.start} - {edu.end}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
              {#if edu.grade}
                <p class="mb-1.5 text-sm text-gray-500">Grade: {edu.grade}</p>
              {/if}
              {#if edu.description}
                <p class="mb-3 text-sm text-gray-800 dark:text-gray-300">
                  {edu.description}
                </p>
              {/if}

              {#if edu.skills}
                <div class="mb-3 flex flex-wrap gap-2">
                  {#each edu.skills as skill}
                    <span
                      class="inline-block rounded-full border border-(--color)/25 bg-(--color)/5 px-3 py-1 text-xs font-medium text-(--color)"
                      >{skill}</span
                    >
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
