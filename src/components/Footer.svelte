<script lang="ts">
  import profile from "../content/profile.json";
  const year = new Date().getFullYear();
</script>

<footer
  class="mt-6 flex flex-col gap-2 border-t border-mist-200 dark:border-mist-800 pt-3 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between print:hidden"
>
  <span>{profile.fullname}</span>
  <span>© {year}</span>
</footer>
