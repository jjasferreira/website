<script lang="ts">
  import { Mail, MapPin, Globe } from "lucide-svelte";
  import { Github, Linkedin } from "@boxicons/svelte";
  let { title = "Contact", contact }: { title?: string; contact: any[] } =
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
  <div class="flex flex-col gap-1.5 pt-0.5 pb-1.25">
    {#each contact as contact}
      {@const Icon = icons[contact.icon]}
      <h4 class="text-sm font-medium text-gray-500">
        <a
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 hover:opacity-80 transition"
        >
          <Icon
            strokeWidth={2.25}
            {...contact.icon === "Github" ? { removePadding: true } : {}}
            class="h-4 w-4"
          />
          {contact.title}
        </a>
      </h4>
    {/each}
  </div>
</div>
