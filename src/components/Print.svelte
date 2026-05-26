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
  class="flex items-center justify-center bg-white border-2 rounded-full cursor-pointer h-9 w-9 border-mist-200 text-mist-500 hover:opacity-80 dark:bg-mist-950 dark:border-mist-800"
>
  <Printer strokeWidth={2.25} class="w-4 h-4" />
</button>
