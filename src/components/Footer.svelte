<script lang="ts">
  import profile from "@content/profile.json";
  const year = new Date().getFullYear();
</script>

<footer
  id="footer"
  class="flex flex-col gap-2 pt-3 mt-6 text-xs border-t border-mist-200 dark:border-mist-800 text-mist-500 sm:flex-row sm:items-center sm:justify-between print:hidden"
>
  <a href="/" class="hover:underline">
    {profile.fullname}
  </a>
  <span>© {year}</span>
</footer>
