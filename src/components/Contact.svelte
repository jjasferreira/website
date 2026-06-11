<script lang="ts">
  let {
    title = "Contact",
    contact,
  }: {
    title?: string;
    contact: Record<string, { icon: string; url: string; title: string }>;
  } = $props();
  const icons = import.meta.glob("../assets/icons/**/*.svg", {
    query: "?raw",
    import: "default",
    eager: true,
  });
</script>

<section
  id={title.toLowerCase()}
  class="pl-4.5 pr-4 pt-4 pb-2 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="pl-1.5 mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div class="flex flex-col pt-0.75 pb-1.25">
    {#each Object.entries(contact) as [, item]}
      {@const icon = icons["../assets/icons/" + item.icon]}
      <h4 class="text-sm font-medium text-mist-500">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 rounded-[9px] pl-1.5 pr-2 my-px py-0.75 hover:opacity-90 hover:bg-mist-100 dark:hover:bg-mist-900"
        >
          <div class="w-4 h-4 [&_svg]:h-full [&_svg]:w-full">
            {@html icon}
          </div>
          {item.title}
        </a>
      </h4>
    {/each}
  </div>
</section>
