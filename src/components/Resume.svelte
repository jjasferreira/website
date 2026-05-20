<script lang="ts">
  import Theme from "./Theme.svelte";
  import Profile from "./Profile.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Background from "./Background.svelte";
  import Print from "./Print.svelte";

  let { data }: { data: any } = $props();
</script>

<div class="min-h-screen bg-mist-50 px-5 py-6 dark:bg-mist-900">
  <div class="mx-auto max-w-5xl">
    <!-- First Row -->
    <div class="print:hidden mb-4 flex gap-4">
      <Theme />
      <Print />
    </div>
    <div class="mb-4 space-y-4">
      <Profile {data} />
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
            tools={data.projects.tools}
            frameworks={data.projects.frameworks}
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
