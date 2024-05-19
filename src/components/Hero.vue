<script>
  export default {
    name: 'AppHero',
  }
</script>

<template>
  <section id="home" class="h-screen flex flex-col items-center justify-center">
    <div class="px-4 xl:px-0 mb-10 flex flex-col items-center justify-center">
      <h2
        class="font-josefin-sans text-8xl font-bold mb-3 text-white/70 text-center"
      >
        Juntos, aprendemos
      </h2>
      <p class="text-2xl max-w-[700px] text-center text-white/70">
        Simplifique a avaliação da diversidade na sua empresa com pesquisa
        automatizada e insights práticos
      </p>
    </div>
    <a
      href="#anama"
      class="text-white/70 transition-colors duration-200 font-medium h-max w-max"
    >
      <svg
        class="mt-14 animate-bounce delay-500"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9L12 16L5 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </section>
</template>
