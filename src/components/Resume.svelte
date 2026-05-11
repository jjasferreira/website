<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import {
    Mail,
    MapPin,
    Globe,
    ExternalLink,
    FileText,
    FileBadge,
    GraduationCap,
    Presentation,
  } from "lucide-svelte";
  import { Github, Linkedin } from "@boxicons/svelte";
  let { data }: { data: any } = $props();
  import { dark } from "../theme.js";

  const icons: Record<string, any> = {
    ExternalLink,
    FileText,
    FileBadge,
    GraduationCap,
    Presentation,
    Github,
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
    <!-- First Row -->
    <div class="mb-4 space-y-4">
      <!-- Profile Section -->
      <div
        class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
      >
        <div class="lg:col-span-2 flex items-center gap-4">
          <img
            src="/jjasferreira.png"
            alt={data.name}
            class="h-20 w-20 rounded-full object-cover shrink-0"
          />
          <h1 class="text-4xl font-bold text-black dark:text-white">
            {data.name}
          </h1>
          <div class="ml-auto shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <!-- About Section -->
      <div
        class="rounded-xl border-2 border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950"
      >
        <p class="py-0.5 text-xs text-gray-800 dark:text-gray-200">
          {data.about}
        </p>
      </div>
    </div>
    <!-- Second Row -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <!-- Left Column -->
      <div class="space-y-4 lg:col-span-1">
        <!-- First Row -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <!-- Contact Section -->
          <div
            class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
          >
            <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
              Contact
            </h2>
            <div
              class="flex flex-col justify-between gap-4 font-medium pt-0.5 pb-1"
            >
              <div class="flex flex-col gap-2 text-sm text-gray-500">
                <a
                  href="mailto:{data.email}"
                  class="inline-flex items-center gap-1 hover:opacity-80 transition"
                >
                  <Mail size={16} strokeWidth={2.25} />
                  {data.email}
                </a>
                <a
                  href="https://www.google.com/search?q={data.location}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 hover:opacity-80 transition"
                >
                  <MapPin size={16} strokeWidth={2.25} />
                  {data.location}
                </a>
                <a
                  href="https://{data.website}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 hover:opacity-80 transition"
                >
                  <Globe size={16} strokeWidth={2.25} />
                  {data.website}
                </a>
                <a
                  href="https://www.github.com/{data.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 hover:opacity-80 transition"
                >
                  <Github size="xs" removePadding />
                  {data.github}
                </a>
                <a
                  href="https://www.linkedin.com/in/{data.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 hover:opacity-80 transition"
                >
                  <Linkedin size="xs" />
                  {data.linkedin}
                </a>
              </div>
            </div>
          </div>
          <!-- Skills Section -->
          <div
            class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
          >
            <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
              Skills
            </h2>
            <div class="space-y-1 pt-0.5 pb-1">
              {#each skills as skill}
                <div class="text-[13px] text-gray-800 dark:text-gray-200">
                  {skill}
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="space-y-4 lg:col-span-3">
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
                style=" --color: {exp.color};
                        --lightcolor: color-mix({exp.color}, white 20%);
                        --darkcolor: color-mix(in srgb, {exp.color}, black 10%)"
                class={i === 0
                  ? "flex gap-4 pt-1.5"
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
                        class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80 dark:bg-(--darkcolor)/90"
                        src={$dark && exp.darklogo ? exp.darklogo : exp.logo}
                        alt={exp.organization}
                      />
                    </a>
                  </div>
                {/if}
                <div class="grow">
                  <!-- Details -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3
                        class="text-base font-semibold text-black dark:text-white transition hover:opacity-80"
                      >
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          >{exp.title}
                        </a>
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
                  <!-- Headline -->
                  {#if exp.head}
                    <p
                      class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-gray-600 dark:text-gray-400 transition hover:opacity-80"
                    >
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >{exp.head}
                      </a>
                    </p>
                  {/if}
                  <!-- Skills -->
                  {#if exp.skills}
                    <div class="flex flex-wrap gap-2 py-0.75">
                      {#each exp.skills as skill}
                        <span
                          class="inline-block rounded-full border border-(--darkcolor)/33 dark:border-(--lightcolor)/33 bg-(--lightcolor)/7.5 dark:bg-(--darkcolor)/10 text-(--darkcolor) dark:text-(--lightcolor) px-2 pt-0.5 pb-[3.5px] text-[11px] font-medium"
                          >{skill}</span
                        >
                      {/each}
                    </div>
                  {/if}
                  <!-- Description -->
                  {#if exp.description}
                    <p class="py-0.75 text-xs text-gray-800 dark:text-gray-200">
                      {exp.description}
                    </p>
                  {/if}
                  <!-- Media -->
                  {#if exp.media}
                    <div class="flex flex-wrap gap-x-3 gap-y-1 py-0.75">
                      {#each exp.media as media}
                        {@const Icon = icons[media.icon]}
                        <a
                          href={media.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) transition hover:opacity-80 dark:text-(--lightcolor)"
                        >
                          {#if Icon}
                            <Icon
                              size={12}
                              width={12}
                              height={12}
                              removePadding
                            />
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
                style=" --color: {edu.color};
                        --lightcolor: color-mix({edu.color}, white 20%);
                        --darkcolor: color-mix(in srgb, {edu.color}, black 10%)"
                class={i === 0
                  ? "flex gap-4 pt-1.5"
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
                        class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80 dark:bg-(--darkcolor)/90"
                        src={$dark && edu.darklogo ? edu.darklogo : edu.logo}
                        alt={edu.school}
                      />
                    </a>
                  </div>
                {/if}
                <div class="grow">
                  <!-- Details -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
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
                    <p
                      class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-gray-600 dark:text-gray-400"
                    >
                      Grade: {edu.grade}
                    </p>
                  {/if}
                  <!-- Skills -->
                  {#if edu.skills}
                    <div class="flex flex-wrap gap-2 py-0.75">
                      {#each edu.skills as skill}
                        <span
                          class="inline-block rounded-full border border-(--darkcolor)/33 dark:border-(--lightcolor)/33 bg-(--lightcolor)/7.5 dark:bg-(--darkcolor)/10 text-(--darkcolor) dark:text-(--lightcolor) px-2 pt-0.5 pb-[3.5px] text-[11px] font-medium"
                          >{skill}</span
                        >
                      {/each}
                    </div>
                  {/if}
                  <!-- Description -->
                  {#if edu.description}
                    <p class="py-0.75 text-xs text-gray-800 dark:text-gray-200">
                      {edu.description}
                    </p>
                  {/if}
                  <!-- Media -->
                  {#if edu.media}
                    <div class="flex flex-wrap gap-x-3 gap-y-1 py-0.75">
                      {#each edu.media as media}
                        {@const Icon = icons[media.icon]}
                        <a
                          href={media.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) transition hover:opacity-80 dark:text-(--lightcolor)"
                        >
                          {#if Icon}
                            <Icon
                              size={12}
                              width={12}
                              height={12}
                              removePadding
                            />
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
    </div>
  </div>
</div>
