<script lang="ts">
  import printer from "../icons/lucide-printer.svg?raw";

  function printPage() {
    if (typeof window !== "undefined" && window.print) {
      window.print();
    }
  }
</script>

<button
  id="print"
  type="button"
  aria-label="print"
  onclick={printPage}
  class="flex items-center justify-center bg-white border-2 rounded-full cursor-pointer h-9 w-9 border-mist-200 text-mist-500 hover:opacity-80 dark:bg-mist-950 dark:border-mist-800"
>
  <div class="w-4 h-4">
    {@html printer}
  </div>
</button>
