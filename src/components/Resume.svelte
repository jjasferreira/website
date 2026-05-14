<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Background from "./Background.svelte";
  let { data }: { data: any } = $props();
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
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1"
        >
          <Contact contact={data.contact} />
          <Skills
            fields={[
              ...data.experience.flatMap((exp: any) => exp.fields),
              ...data.education.flatMap((edu: any) => edu.fields),
            ]}
            programming={data.projects.programming}
          />
          <Projects title="Projects" projects={data.projects} />
        </div>
      </div>
      <!-- Right Column -->
      <div class="space-y-4 lg:col-span-3">
        <Background title="Experience" background={data.experience} />
        <Background title="Education" background={data.education} />
      </div>
    </div>
  </div>
</div>
