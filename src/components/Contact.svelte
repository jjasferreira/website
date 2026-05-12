<script lang="ts">
  import { Mail, MapPin, Globe } from "lucide-svelte";
  import { Github, Linkedin } from "@boxicons/svelte";
  let { title = "Contact", entries }: { title?: string; entries: any[] } =
    $props();
  const icons: Record<string, any> = {
    Mail,
    MapPin,
    Globe,
    Github,
    Linkedin,
  };
</script>

<div
  class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">{title}</h2>
  <div class="flex flex-col justify-between gap-4 font-medium pt-0.5 pb-1.25">
    <div class="flex flex-col gap-2 text-sm text-gray-500">
      {#each entries as ent}
        {@const Icon = icons[ent.icon]}
        <a
          href={ent.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 hover:opacity-80 transition"
        >
          <Icon
            size={16}
            strokeWidth={2.25}
            height={16}
            width={16}
            {...ent.icon === "Github" ? { removePadding: true } : {}}
          />
          {ent.title}
        </a>
      {/each}
    </div>
  </div>
</div>
