<script>
  export default {
    name: 'AppFooter',
    data() {
      return {
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
        socialLinks: [
          {
            name: 'Facebook',
            src: 'icon-facebook',
            url: 'https://www.facebook.com/',
          },
          {
            name: 'Twitter',
            src: 'icon-twitter',
            url: 'https://www.x.com',
          },
          {
            name: 'Instagram',
            src: 'icon-instagram',
            url: 'https://www.instagram.com',
          },
        ],
      }
    },
  }
</script>

<template>
  <footer class="w-full bg-gray-900 py-10 grow">
    <div
      class="mx-auto flex max-w-[1280px] flex-col items-center gap-y-12 px-6 md:flex-row md:justify-between"
    >
      <div
        class="flex flex-col items-center gap-y-12 md:items-start md:gap-y-8"
      >
        <a href="#home" class="text-white">
          <h2 class="font-josefin-sans text-2xl font-bold text-white italic">
            Oré
          </h2>
        </a>
        <ul class="flex flex-col items-center justify-center gap-6 md:flex-row">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="nav__links font-alata font-bold text-[18px] text-white transition-all ease-out md:text-[15px]"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col items-center gap-y-6 text-center md:items-end md:gap-y-4"
      >
        <ul class="flex gap-x-5">
          <li v-for="link in socialLinks" :key="link.name">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="nav__links transition-all ease-out"
            >
              <img
                :src="`./assets/${link.src}.svg`"
                :alt="link.name"
                class="h-6 w-6"
              />
            </a>
          </li>
        </ul>
        <p
          class="font-atala text-[18px] tracking-wide text-brand-dark-gray md:text-sm"
        >
          © {{ new Date().getFullYear() }} Oré. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .nav__links:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin: 0 auto;
    margin-top: 8px;
    background: none repeat scroll 0 0 rgb(255, 255, 255);
    transition: all ease-in-out 0.3s;
  }
  .nav__links:hover:after {
    width: 24px;
  }
</style>
