<script>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import Footer from './components/Footer.vue'
  import About from './components/About.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Hero,
      About,
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
      <About />
      <Footer />
    </main>
  </div>
</template>

<style>
  .background {
    background: linear-gradient(
      45deg,
      rgba(255, 0, 150, 0.5),
      rgba(0, 204, 255, 0.5)
    );
  }
</style>
