<script lang="ts">
  let {
    title = "Background",
    background,
  }: { title?: string; background: any } = $props();
  import { dark } from "../theme.js";
  import {
    ExternalLink,
    FileText,
    FileBadge,
    GraduationCap,
    Presentation,
  } from "lucide-svelte";
  import { Github } from "@boxicons/svelte";
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
  class="px-6 pt-4 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <h2 class="mb-2 text-xl font-semibold text-black dark:text-white">
    {title}
  </h2>
  <div>
    {#each Object.values(background as Record<string, any>) as back, i}
      <div
        style=" --color: {back.color};
                        --lightcolor: color-mix({back.color}, white 20%);
                        --darkcolor: color-mix(in srgb, {back.color}, black 10%)"
        class={i === 0
          ? "flex flex-row gap-3 pt-1.5"
          : "mt-2 flex flex-row gap-3 border-t border-mist-200 dark:border-mist-800 pt-2"}
      >
        <!-- Logo -->
        {#if back.logo}
          <div class="shrink-0">
            <a href={back.logourl} target="_blank" rel="noopener noreferrer">
              <img
                class="h-12 w-12 rounded-lg object-contain transition hover:opacity-80 dark:bg-(--darkcolor)/90"
                src={$dark && back.darklogo ? back.darklogo : back.logo}
                alt={back.logoalt}
              />
            </a>
          </div>
        {/if}
        <div class="min-w-0 grow">
          <!-- Details -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3
                class="text-base font-semibold text-black transition dark:text-white hover:opacity-80"
              >
                <a
                  href={back.titleurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {back.title}
                </a>
              </h3>
              <h4 class="text-sm text-mist-800 dark:text-mist-200 font-medium">
                {#if back.subtitleurl}
                  <a
                    href={back.subtitleurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="transition hover:opacity-80"
                  >
                    {back.subtitle}
                  </a>
                {:else}
                  {back.subtitle}
                {/if}
              </h4>
            </div>
            <div class="text-sm text-mist-500 sm:text-right">
              <h5 class="sm:pt-1">
                {back.time}
              </h5>
              <h5>{back.location}</h5>
            </div>
          </div>
          <!-- Heading -->
          {#if back.heading}
            <h6
              class="pt-0.5 pb-0.75 sm:py-0.75 text-xs font-medium text-mist-600 dark:text-mist-400"
            >
              {#if back.headingurl}
                <a
                  href={back.headingurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition hover:opacity-80"
                >
                  {back.heading}
                </a>
              {:else}
                {back.heading}
              {/if}
            </h6>
          {/if}
          <!-- Fields -->
          {#if back.fields}
            <div class="flex flex-wrap gap-2 py-0.75">
              {#each back.fields as field}
                <span
                  class="inline-block rounded-full border border-(--darkcolor)/33 dark:border-(--lightcolor)/33 bg-(--lightcolor)/7.5 dark:bg-(--darkcolor)/10 text-(--darkcolor) dark:text-(--lightcolor) px-2 pt-0.5 pb-[3.5px] text-[11px] font-medium"
                >
                  {field}
                </span>
              {/each}
            </div>
          {/if}
          <!-- Description -->
          {#if back.description}
            <p class="py-0.75 text-xs text-mist-800 dark:text-mist-200">
              {back.description}
            </p>
          {/if}
          <!-- Media -->
          {#if back.media}
            <div class="flex flex-wrap gap-x-3 gap-y-1 py-0.75">
              {#each back.media as media}
                {@const Icon = icons[media.icon]}
                {#if media.url}
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) transition hover:opacity-80 dark:text-(--lightcolor)"
                  >
                    <div class="w-3">
                      {#if Icon}
                        <Icon
                          strokeWidth={2.25}
                          removePadding
                          class="w-3 h-3"
                        />
                      {/if}
                    </div>
                    <span>{media.title}</span>
                  </a>
                {:else}
                  <span
                    class="inline-flex items-center gap-1 text-[11px] font-medium text-(--darkcolor) dark:text-(--lightcolor)"
                  >
                    <div class="w-3">
                      {#if Icon}
                        <Icon
                          strokeWidth={2.25}
                          removePadding
                          class="w-3 h-3"
                        />
                      {/if}
                    </div>
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
