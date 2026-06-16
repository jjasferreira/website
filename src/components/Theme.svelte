<script lang="ts">
  import sun from "@icons/ui/sun.svg?raw";
  import moon from "@icons/ui/moon.svg?raw";
  import { dark, initializeTheme, toggleTheme } from "../theme.js";
  import { onMount } from "svelte";
  let { iconClass }: { iconClass?: string } = $props();

  onMount(() => {
    initializeTheme();
  });
</script>

<button
  id="theme"
  type="button"
  aria-label="Toggle theme"
  onclick={toggleTheme}
  class="flex items-center h-10 border-2 rounded-full cursor-pointer w-15 bg-mist-200 border-mist-200 dark:border-mist-800 dark:bg-mist-800"
>
  <span
    class={`flex h-full w-[36.8px] items-center justify-center bg-white dark:bg-mist-950 rounded-full duration-300 hover:opacity-80 text-mist-500 ${$dark ? "translate-x-[19.75px]" : "translate-x-0"}`}
  >
    <div class="w-5 h-5 {iconClass}">
      {@html $dark ? moon : sun}
    </div>
  </span>
</button>
