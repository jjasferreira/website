<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "lucide-svelte";
  import { dark, initializeTheme, toggleTheme } from "../theme.js";

  onMount(() => {
    initializeTheme();
  });
</script>

<button
  aria-label="Toggle theme"
  onclick={toggleTheme}
  class="flex items-center gap-2 rounded-full border-2 border-gray-200 dark:border-gray-800 p-2 text-sm text-black dark:text-white transition hover:bg-gray-300 dark:hover:bg-gray-700"
>
  {#if $dark}
    <Sun size={18} />
  {:else}
    <Moon size={18} />
  {/if}
</button>
