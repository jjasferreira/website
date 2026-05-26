<script lang="ts">
  let { name }: { name: string } = $props();
  const year = new Date().getFullYear();
</script>

<footer
  class="mt-6 flex flex-col gap-2 border-t border-mist-200/80 pt-4 text-xs text-slate-500 dark:border-mist-700/70 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between print:hidden"
>
  <span>{name}</span>
  <span>© {year}</span>
</footer>
