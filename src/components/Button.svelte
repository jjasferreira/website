<script lang="ts">
  let {
    id,
    ariaLabel,
    onclick,
    icon,
    iconClass,
    title,
    titleClass,
  }: {
    id: string;
    ariaLabel: string;
    onclick: () => void;
    icon?: string;
    iconClass?: string;
    title?: string;
    titleClass?: string;
  } = $props();
</script>

<button
  {id}
  type="button"
  aria-label={ariaLabel}
  {onclick}
  class="px-2.25 h-10 min-w-10 flex items-center justify-center bg-white border-2 rounded-full cursor-pointer border-mist-200 text-mist-500 hover:opacity-80 dark:bg-mist-950 dark:border-mist-800"
>
  {#if icon}
    <div class="w-5 h-5 {iconClass}">
      {@html icon}
    </div>
  {/if}
  {#if title}
    <span class="px-1.25 text-[15px] font-medium {titleClass} ">
      {title}
    </span>
  {/if}
</button>
