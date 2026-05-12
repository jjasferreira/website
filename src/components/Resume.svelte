<script lang="ts">
  import Contact from "./Contact.svelte";

  import Background from "./Background.svelte";
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
          <Contact entries={data.contact} />
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
        <Background title="Experience" entries={data.experience} />
        <!-- Education Section -->
        <Background title="Education" entries={data.education} />
      </div>
    </div>
  </div>
</div>
