<script>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import Footer from './components/Footer.vue'
  import About from './components/About.vue'
  import Indicator from './components/Indicator.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Hero,
      About,
      Footer,
      Indicator,
    },
  }
</script>

<template>
  <div
    class="background flex flex-col bg-brand-white min-h-screen justify-between"
  >
    <Header />
    <main>
      <Hero />
      <About />
      <Indicator />
      <Footer />
    </main>
  </div>
</template>

<style>
  .background {
    background: linear-gradient(45deg, #5b0000, #400000);
  }
</style>
