<script lang="ts">
  import profile from "@content/profile.json";
</script>

<section
  id="profile"
  class="px-6 pt-3.5 pb-3 bg-white border-2 rounded-xl border-mist-200 dark:border-mist-800 dark:bg-mist-950"
>
  <div class="flex gap-5">
    <div class="w-28 h-full overflow-hidden rounded-full mt-2 items-stretch">
      <img
        src={"../images/" + profile.avatar}
        alt={profile.name}
        class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div class="flex-1">
      <h1
        class="text-[28px] font-bold text-black dark:text-white flex gap-3 items-start mb-px"
      >
        {profile.name}
      </h1>
      <p class="pb-0.75 text-[13px] text-mist-800 dark:text-mist-200">
        {profile.about}
      </p>
    </div>
  </div>
</section>
