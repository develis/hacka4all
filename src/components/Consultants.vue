<script>
  import Slider from './Slider.vue'

  export default {
    name: 'AppTestimonials',
    components: {
      Slider,
    },
  }
</script>

<template>
  <section id="faca-parte" class="py-24 w-full bg-gray-100">
    <div
      class="mx-auto max-w-[1280px] flex flex-col items-center justify-center gap-7 text-gray-900"
    >
      <h2
        class="mb-6 text-4xl font-josefin-sans text-center max-w-5xl font-bold"
      >
        Nossos consultores são especialistas do setor
      </h2>
      <Slider />
    </div>
  </section>
</template>
