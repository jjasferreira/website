<script lang="ts">
  import { onMount } from "svelte";
  import { Sun, Moon } from "lucide-svelte";

  let isDark = $state(false);

  const toggle = () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  onMount(() => {
    isDark = document.documentElement.classList.contains("dark");
  });
</script>

<button
  aria-label="Toggle theme"
  onclick={toggle}
  class="flex items-center gap-2 rounded-full border-2 border-gray-200 dark:border-gray-800 p-2 text-sm text-black dark:text-white transition hover:bg-gray-300 dark:hover:bg-gray-700"
>
  {#if isDark}
    <Sun size={18} />
  {:else}
    <Moon size={18} />
  {/if}
</button>
