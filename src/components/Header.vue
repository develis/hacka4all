<script>
  export default {
    name: 'AppHeader',
    data() {
      return {
        menuOpen: false,
        hamburgerButton: '/assets/icon-hamburger.svg',
        closeButton: '/assets/icon-close.svg',
        isScrolled: false,
        navLinks: [
          {
            name: 'Anama',
            href: '#anama',
          },
          {
            name: 'Faça parte',
            href: '#faca-parte',
          },
          {
            name: 'Dados',
            href: '#',
          },
          {
            name: 'Dashboard',
            href: '#dashboard',
          },
        ],
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      toogleMenu() {
        this.menuOpen = !this.menuOpen
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 0
      },
    },
  }
</script>

<template>
  <header
    class="fixed z-20 w-full transition-colors duration-300"
    :class="isScrolled ? 'bg-black/50' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-[1280px] flex items-center">
      <nav
        class="flex w-full flex-wrap items-start p-4 transition-all"
        :class="{
          'h-screen bg-brand-black md:h-max md:bg-transparent': menuOpen,
        }"
      >
        <a href="#home" class="w-2/4 shrink-0">
          <h1
            class="title font-josefin-sans text-2xl font-bold text-white italic"
          >
            Oré
          </h1>
        </a>
        <div class="flex w-2/4 shrink-0 justify-end md:hidden">
          <button
            type="button"
            @click="toogleMenu"
            data-toggle
            aria-controls="NavigationCollapse"
            :aria-expanded="menuOpen"
            aria-label="Toggle navigation"
            class="rotate-0 cursor-pointer border-none outline-none transition-all duration-700 ease-out"
            :class="{ 'rotate-180': menuOpen }"
          >
            <img :src="menuOpen ? closeButton : hamburgerButton" alt="Menu" />
          </button>
        </div>
        <div
          id="NavigationCollapse"
          class="w-full md:block md:w-2/4"
          :class="{ hidden: !menuOpen }"
        >
          <ul class="flex flex-col gap-8 md:flex-row md:justify-end">
            <li v-for="link in navLinks" :key="link.name">
              <a
                :href="link.href"
                class="nav__links font-josefin-sans text-2xl font-medium uppercase text-white transition-all ease-out md:font-alata md:text-[15px] md:capitalize"
                >{{ link.name }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .nav__links::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin: 0 auto;
    margin-top: 8px;
    background: none repeat scroll 0 0 rgb(255, 255, 255);
    transition: all ease-in-out 0.3s;
  }
  .nav__links:hover::after {
    width: 24px;
  }
</style>
