<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "lucide-svelte";
  import { dark, initializeTheme, toggleTheme } from "../theme.js";

  onMount(() => {
    initializeTheme();
  });
</script>

<button
  type="button"
  aria-label="theme"
  onclick={toggleTheme}
  class="flex h-9 w-14 items-center border-2 rounded-full bg-mist-200 border-mist-200 dark:border-mist-800 dark:bg-mist-800 hover:opacity-80"
>
  <span
    class={`flex h-full w-[32.8px] items-center justify-center bg-white dark:bg-mist-950 rounded-full duration-300 text-mist-500 cursor-pointer ${$dark ? "translate-x-5" : "translate-x-0"}`}
  >
    {#if $dark}
      <Moon strokeWidth={2.25} class="h-4 w-4" />
    {:else}
      <Sun strokeWidth={2.25} class="h-4 w-4" />
    {/if}
  </span>
</button>
