<script>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import Anama from './components/Anama.vue'
  import Service from './components/Service.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Hero,
      Anama,
      Service,
      Footer,
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
      <Anama />
      <Service />
      <Footer />
    </main>
  </div>
</template>

<style>
  .background {
    background: linear-gradient(45deg, #5b0000, #400000);
  }
</style>
