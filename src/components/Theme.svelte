<script lang="ts">
  import sun from "../icons/lucide-sun.svg?raw";
  import moon from "../icons/lucide-moon.svg?raw";
  import { dark, initializeTheme, toggleTheme } from "../theme.js";
  import { onMount } from "svelte";

  onMount(() => {
    initializeTheme();
  });
</script>

<button
  id="theme"
  type="button"
  aria-label="theme"
  onclick={toggleTheme}
  class="flex items-center border-2 rounded-full cursor-pointer h-9 w-14 bg-mist-200 border-mist-200 dark:border-mist-800 dark:bg-mist-800"
>
  <span
    class={`flex h-full w-[32.8px] items-center justify-center bg-white dark:bg-mist-950 rounded-full duration-300 hover:opacity-80 text-mist-500 ${$dark ? "translate-x-[19.75px]" : "translate-x-0"}`}
  >
    {#if $dark}
      <div class="w-4 h-4">
        {@html moon}
      </div>
    {:else}
      <div class="w-4 h-4">
        {@html sun}
      </div>
    {/if}
  </span>
</button>
