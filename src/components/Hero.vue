<script>
  export default {
    name: 'AppHero',
  }
</script>

<template>
  <section class="h-screen flex flex-col items-center justify-center">
    <div class="mb-10 flex flex-col items-center justify-center">
      <h2 class="font-josefin-sans text-8xl font-bold mb-3 text-white/70">
        Juntos, aprendemos
      </h2>
      <p class="text-2xl max-w-[700px] text-center text-white/70">
        Simplifique a avaliação da diversidade na sua empresa com pesquisa
        automatizada e insights práticos
      </p>
    </div>
    <button
      type="button"
      class="rounded-xl px-7 py-3 bg-[#400000] text-white/70 hover:bg-[#501919] transition-colors duration-200 shadow-md font-medium"
    >
      Saiba mais
    </button>
    <svg class="mt-14 animate-bounce delay-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 9L12 16L5 9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </section>
</template>
