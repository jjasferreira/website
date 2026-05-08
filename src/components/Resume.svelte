<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import { FileText } from "lucide-svelte";
  let { data }: { data: any } = $props();

  const icons: Record<string, any> = {
    FileText,
  };

  const skills = $derived.by(() => {
    const allSkills = new Set<string>();
    data.experience?.forEach((exp: any) => {
      exp.skills?.forEach((skill: string) => allSkills.add(skill));
    });
    data.education?.forEach((edu: any) => {
      edu.skills?.forEach((skill: string) => allSkills.add(skill));
    });
    return Array.from(allSkills).sort();
  });
</script>

<div
  class="min-h-screen bg-linear-to-br from-gray-50 to-gray-200 px-5 py-6 dark:from-gray-800 dark:to-gray-950"
>
  <div class="mx-auto max-w-5xl">
    <!-- Header Section -->
    <div
      class="mb-4 rounded-xl border-2 border-gray-200 bg-white p-10 dark:border-gray-800 dark:bg-gray-950"
    >
      <div class="mb-4 flex items-center gap-4">
        <img
          src="/jjasferreira.png"
          alt={data.name}
          class="h-20 w-20 rounded-full object-cover"
        />
        <h1 class="text-4xl font-bold text-black dark:text-white">
          {data.name}
        </h1>
      </div>
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

    <!-- Main Content: Experience/Education and Skills -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-7">
      <!-- Left Column: Experience and Education -->
      <div class="space-y-4 lg:col-span-5">
        <!-- Experience Section -->
        <div
          class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
        >
          <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
            Experience
          </h2>
          <div class="">
            {#each data.experience as exp, i}
              <div
                style="--color: {exp.color}"
                class={i === 0
                  ? "flex gap-4 pt-1"
                  : "mt-2 flex gap-4 border-t border-gray-200 dark:border-gray-800 pt-2"}
              >
                <!-- Logo -->
                {#if exp.logo}
                  <div class="shrink-0">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80"
                        src={exp.logo}
                        alt={exp.organization}
                      />
                    </a>
                  </div>
                {/if}
                <div class="grow">
                  <!-- Details -->
                  <div
                    class="flex flex-col pb-1 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3
                        class="text-base font-semibold text-black dark:text-white"
                      >
                        {exp.title}
                      </h3>
                      <p
                        class="text-sm font-medium text-black transition hover:opacity-80 dark:text-white"
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
                  <!-- Description -->
                  {#if exp.description}
                    <p class="pb-1 text-xs text-gray-800 dark:text-gray-300">
                      {exp.description}
                    </p>
                  {/if}
                  <!-- Skills -->
                  {#if exp.skills}
                    <div class="flex flex-wrap gap-2 py-1">
                      {#each exp.skills as skill}
                        <span
                          class="inline-block rounded-full border border-(--color)/25 bg-(--color)/5 px-3 py-1 text-xs font-medium text-(--color)"
                          >{skill}</span
                        >
                      {/each}
                    </div>
                  {/if}
                  <!-- Media -->
                  {#if exp.media}
                    <div class="flex flex-wrap gap-x-3 gap-y-1 py-1">
                      {#each exp.media as media}
                        {@const Icon = icons[media.icon]}
                        <a
                          href={media.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-1 text-xs font-medium text-[color-mix(var(--color),black_5%)] transition hover:opacity-80 dark:text-[color-mix(var(--color),white_25%)]"
                        >
                          {#if Icon}
                            <Icon size={11} />
                          {/if}
                          <span>{media.title}</span>
                        </a>
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
          class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
        >
          <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
            Education
          </h2>
          <div>
            {#each data.education as edu, i}
              <div
                style="--color: {edu.color}"
                class={i === 0
                  ? "flex gap-4 pt-1"
                  : "mt-2 flex gap-4 border-t border-gray-200 dark:border-gray-800 pt-2"}
              >
                <!-- Logo -->
                {#if edu.logo}
                  <div class="shrink-0">
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80"
                        src={edu.logo}
                        alt={edu.school}
                      />
                    </a>
                  </div>
                {/if}
                <div class="grow">
                  <!-- Details -->
                  <div
                    class="flex flex-col pb-1 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3
                        class="text-base font-semibold text-black transition hover:opacity-80 dark:text-white"
                      >
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer">{edu.school}</a
                        >
                      </h3>
                      <p class="text-sm font-medium text-black dark:text-white">
                        {#if edu.url}
                          <a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="transition hover:opacity-80"
                          >
                            {edu.degree}{#if edu.field}, {edu.field}{/if}
                          </a>
                        {:else}
                          {edu.degree}{#if edu.field}, {edu.field}{/if}
                        {/if}
                      </p>
                    </div>
                    <div class="text-sm text-gray-500 sm:text-right">
                      <div class="sm:pt-1">
                        {edu.start} - {edu.end}
                      </div>
                      <div>
                        {#if edu.campus}
                          {edu.campus} ·
                        {/if}
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <!-- Grade -->
                  {#if edu.grade}
                    <p class="pb-1 text-sm text-gray-500">
                      Grade: {edu.grade}
                    </p>
                  {/if}
                  <!-- Description -->
                  {#if edu.description}
                    <p class="pb-1 text-xs text-gray-800 dark:text-gray-300">
                      {edu.description}
                    </p>
                  {/if}

                  {#if edu.skills}
                    <div class="flex flex-wrap gap-2 py-1">
                      {#each edu.skills as skill}
                        <span
                          class="inline-block rounded-full border border-(--color)/25 bg-(--color)/5 px-3 py-1 text-xs font-medium text-(--color)"
                          >{skill}</span
                        >
                      {/each}
                    </div>
                  {/if}
                  {#if edu.media}
                    <div class="flex flex-wrap gap-x-3 gap-y-1 py-1">
                      {#each edu.media as media}
                        {@const Icon = icons[media.icon]}
                        <a
                          href={media.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-1 text-xs font-medium text-[color-mix(var(--color),black_5%)] transition hover:opacity-80 dark:text-[color-mix(var(--color),white_25%)]"
                        >
                          {#if Icon}
                            <Icon size={11} />
                          {/if}
                          <span>{media.title}</span>
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Right Column: Skills -->
      <div class="lg:col-span-2">
        <div
          class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-4 dark:border-gray-800 dark:bg-gray-950"
        >
          <h2 class="mb-4 text-xl font-semibold text-black dark:text-white">
            Skills
          </h2>
          <div class="space-y-2">
            {#each skills as skill}
              <div class="text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
