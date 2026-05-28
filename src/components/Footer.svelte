<script lang="ts">
  let { name }: { name: string } = $props();
  const year = new Date().getFullYear();
</script>

<footer
  class="mt-6 flex flex-col gap-2 border-t border-mist-200 dark:border-mist-800 pt-3 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between print:hidden"
>
  <span>{name}</span>
  <span>© {year}</span>
</footer>
