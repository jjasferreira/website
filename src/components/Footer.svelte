<script lang="ts">
  import profile from "@content/profile.json";
  const year = new Date().getFullYear();
</script>

<footer
  id="footer"
  class="flex pt-3 mt-5 text-xs border-t border-mist-200 dark:border-mist-800 text-mist-500 justify-between print:hidden"
>
  <a href="/" class="hover:underline px-1">
    {profile.fullname}
  </a>
  <span class="px-1">© {year}</span>
</footer>
