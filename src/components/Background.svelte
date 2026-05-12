<script lang="ts">
  import {
    ExternalLink,
    FileText,
    FileBadge,
    GraduationCap,
    Presentation,
  } from "lucide-svelte";
  import { Github } from "@boxicons/svelte";
  let { title = "Background", entries }: { title?: string; entries: any[] } =
    $props();
  import { dark } from "../theme.js";
  const icons: Record<string, any> = {
    ExternalLink,
    FileText,
    FileBadge,
    GraduationCap,
    Presentation,
    Github,
  };
</script>

<div
  class="rounded-xl border-2 border-gray-200 bg-white px-6 pt-4 pb-3 dark:border-gray-800 dark:bg-gray-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div class="">
    {#each entries as ent, i}
      <div
        style=" --color: {ent.color};
                        --lightcolor: color-mix({ent.color}, white 20%);
                        --darkcolor: color-mix(in srgb, {ent.color}, black 10%)"
        class={i === 0
          ? "flex gap-4 pt-1.5"
          : "mt-2 flex gap-4 border-t border-gray-200 dark:border-gray-800 pt-2"}
      >
        <!-- Logo -->
        {#if ent.logo}
          <div class="shrink-0">
            <a href={ent.logourl} target="_blank" rel="noopener noreferrer">
              <img
                class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80 dark:bg-(--darkcolor)/90"
                src={$dark && ent.darklogo ? ent.darklogo : ent.logo}
                alt={ent.logoalt}
              />
            </a>
          </div>
        {/if}
        <div class="grow">
          <!-- Details -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3
                class="text-base font-semibold text-black dark:text-white transition hover:opacity-80"
              >
                <a href={ent.titleurl} target="_blank" rel="noopener noreferrer"
                  >{ent.title}
                </a>
              </h3>
              <p class="text-sm font-medium text-black dark:text-white">
                {#if ent.subtitleurl}
                  <a
                    href={ent.subtitleurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition hover:opacity-80">{ent.subtitle}</a
                  >
                {:else}
                  {ent.subtitle}
                {/if}
              </p>
            </div>
            <div class="text-sm text-gray-500 sm:text-right">
              <div class="sm:pt-1">
                {ent.time}
              </div>
              <div>{ent.location}</div>
            </div>
          </div>
          <!-- Heading -->
          {#if ent.heading}
            <p
              class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              {#if ent.headingurl}
                <a
                  href={ent.headingurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition hover:opacity-80"
                  >{ent.heading}
                </a>
              {:else}
                {ent.heading}
              {/if}
            </p>
          {/if}
          <!-- Skills -->
          {#if ent.skills}
            <div class="flex flex-wrap gap-2 py-0.75">
              {#each ent.skills as skill}
                <span
                  class="inline-block rounded-full border border-(--darkcolor)/33 dark:border-(--lightcolor)/33 bg-(--lightcolor)/7.5 dark:bg-(--darkcolor)/10 text-(--darkcolor) dark:text-(--lightcolor) px-2 pt-0.5 pb-[3.5px] text-[11px] font-medium"
                  >{skill}</span
                >
              {/each}
            </div>
          {/if}
          <!-- Description -->
          {#if ent.description}
            <p class="py-0.75 text-xs text-gray-800 dark:text-gray-200">
              {ent.description}
            </p>
          {/if}
          <!-- Media -->
          {#if ent.media}
            <div class="flex flex-wrap gap-x-3 gap-y-1 py-0.75">
              {#each ent.media as media}
                {@const Icon = icons[media.icon]}
                {#if media.url}
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) transition hover:opacity-80 dark:text-(--lightcolor)"
                  >
                    {#if Icon}
                      <Icon
                        size={12}
                        strokeWidth={2.25}
                        width={12}
                        height={12}
                        removePadding
                      />
                    {/if}
                    <span>{media.title}</span>
                  </a>
                {:else}
                  <span
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) dark:text-(--lightcolor)"
                  >
                    {#if Icon}
                      <Icon
                        size={12}
                        strokeWidth={2.25}
                        width={12}
                        height={12}
                        removePadding
                      />
                    {/if}
                    <span>{media.title}</span>
                  </span>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
