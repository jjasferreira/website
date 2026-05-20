<script lang="ts">
  import { Printer } from "lucide-svelte";
  import { getThemeFromEnvironment, toggleTheme } from "../theme";

  function printPage() {
    if (typeof window !== "undefined" && window.print) {
      const wasDark = getThemeFromEnvironment();
      if (wasDark) {
        toggleTheme();
        setTimeout(() => {
          window.print();
          if (wasDark) {
            toggleTheme();
          }
        }, 100);
      } else {
        window.print();
      }
    }
  }
</script>

<button
  type="button"
  aria-label="print"
  onclick={printPage}
  class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-mist-200 bg-white text-mist-500 hover:opacity-80 dark:bg-mist-950 dark:border-mist-800 cursor-pointer"
>
  <Printer strokeWidth={2.25} class="h-4 w-4" />
</button>
