<script>
  export default {
    name: 'AppAbout',
  }
</script>

<template>
  <section class="py-24 w-full bg-brand-white">
    <div class="mx-auto max-w-[1280px]">
      <div class="space-y-8 w-2/4">
        <div
          class="rounded-xl bg-gray-100 text-gray-900 text-sm px-3 p-2 max-w-max shadow-md uppercase tracking-wider"
        >
          Descubra
        </div>
        <div>
          <h2 class="mb-2 text-2xl">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
            amet corrupti vitae, repellendus animi.
          </p>
        </div>
        <ul class="space-y-4">
          <li class="flex items-center gap-4">
            <div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div>
            <p>Beneficio 1</p>
          </li>
          <li class="flex items-center gap-4">
            <div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div>
            <p>Beneficio 2</p>
          </li>
          <li class="flex items-center gap-4">
            <div class="px-4 py-2 rounded-full bg-pink-200 w-max h-max">C</div>
            <p>Beneficio 3</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
