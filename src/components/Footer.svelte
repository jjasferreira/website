<script lang="ts">
  let {
    text,
    href = "/",
  }: {
    text: string;
    href?: string;
  } = $props();
  const year = new Date().getFullYear();
</script>

<footer
  id="footer"
  class="flex justify-between pt-3 mt-5 text-xs border-t border-mist-200 dark:border-mist-800 text-mist-500 print:hidden"
>
  <a {href} class="px-1 underline-offset-[1.5px] hover:underline">
    {text}
  </a>
  <span class="px-1">© {year}</span>
</footer>
