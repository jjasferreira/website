<script lang="ts">
  import Theme from "./Theme.svelte";
  import Print from "./Print.svelte";
  import Code from "./Code.svelte";
  import Profile from "./Profile.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Background from "./Background.svelte";
  import Footer from "./Footer.svelte";

  let { data }: { data: any } = $props();
</script>

<div class="min-h-screen px-5 py-6 bg-mist-50 dark:bg-mist-900">
  <div class="max-w-5xl mx-auto">
    <!-- First Row -->
    <div class="flex gap-4 mb-4 print:hidden">
      <Theme />
      <Print />
      <Code />
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
          <Skills skills={data.skills} />
          <Projects projects={data.projects} skills={data.skills} />
        </div>
      </div>
      <!-- Right Column -->
      <div class="space-y-4 lg:col-span-3">
        <Background title="Experience" background={data.experience} />
        <Background title="Education" background={data.education} />
        <Background
          title="Achievements"
          background={data.achievements}
          subtitle_font="normal"
        />
      </div>
    </div>
    <Footer name={data.fullname} />
  </div>
</div>
