<script lang="ts">
  import Theme from "./Theme.svelte";
  import Print from "./Print.svelte";
  import Code from "./Code.svelte";
  import Profile from "./Profile.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Background from "./Background.svelte";
  import Portfolio from "./Portfolio.svelte";
  import Volunteering from "./Volunteering.svelte";
  import Footer from "./Footer.svelte";

  import contact from "../content/contact.json";
  import profiles from "../content/profiles.json";
  import education from "../content/education.json";
  import experience from "../content/experience.json";
  import achievements from "../content/achievements.json";
</script>

<div class="min-h-screen p-5 bg-mist-50 dark:bg-mist-900">
  <div class="max-w-5xl mx-auto">
    <!-- First Row -->
    <div class="flex justify-center gap-4 mb-4 print:hidden">
      <Print />
      <Code />
      <Theme />
    </div>
    <div class="mb-4 space-y-4">
      <Profile />
    </div>
    <!-- Second Row -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <!-- Left Column -->
      <div class="space-y-4 lg:col-span-1">
        <!-- First Row -->
        <div
          class="@container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1"
        >
          <Contact {contact} />
          <Skills />
          <Projects />
          <Contact title="Profiles" contact={profiles} />
        </div>
      </div>
      <!-- Right Column -->
      <div class="@container space-y-4 lg:col-span-3 pb-13.75">
        <Background title="Experience" background={experience} />
        <Background title="Education" background={education} />
        <Background title="Achievements" background={achievements} />
        <Portfolio />
        <Volunteering />
      </div>
    </div>
    <Footer />
  </div>
</div>
