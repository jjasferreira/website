<script lang="ts">
  import Theme from "./Theme.svelte";
  import Print from "./Print.svelte";
  import Code from "./Code.svelte";
  import Profile from "./Profile.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Background from "./Background.svelte";
  import Volunteering from "./Volunteering.svelte";
  import Footer from "./Footer.svelte";

  import education from "../content/education.json";
  import experience from "../content/experience.json";
  import achievements from "../content/achievements.json";
  import { contributions, personal, academic } from "../content/projects.json";
</script>

<div class="min-h-screen px-5 py-6 bg-mist-50 dark:bg-mist-900">
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
          <Contact />
          <Skills />
          <Projects
            projects={{ contributions: contributions, personal: personal }}
          />
        </div>
      </div>
      <!-- Right Column -->
      <div class="@container space-y-4 lg:col-span-3">
        <Background title="Experience" background={experience} />
        <Background title="Education" background={education} />
        <Background title="Achievements" background={achievements} />
        <Projects projects={{ academic: academic }} />
        <Volunteering />
      </div>
    </div>
    <Footer />
  </div>
</div>
