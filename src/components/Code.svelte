<script lang="ts">
  import { CodeXml } from "lucide-svelte";
</script>

<button
  type="button"
  aria-label="code"
  onclick={() =>
    window.open(
      "https://github.com/jjasferreira/jjasferreira.github.io",
      "_blank",
      "noopener,noreferrer",
    )}
  class="flex items-center justify-center bg-white border-2 rounded-full cursor-pointer h-9 w-9 border-mist-200 text-mist-500 hover:opacity-80 dark:bg-mist-950 dark:border-mist-800"
>
  <CodeXml strokeWidth={2.25} class="w-4 h-4" />
</button>
