<script>
  import Slider from './Slider.vue'

  export default {
    name: 'AppAnama',
    components: {
      Slider,
    },
    data() {
      return {
        items: [
          {
            num: '01',
            text: 'Sistema de apoio entre os membros',
          },
          {
            num: '02',
            text: 'Pessoas como você',
          },
          {
            num: '03',
            text: 'Impacto na reputação e produtividade',
          },
        ],
      }
    },
  }
</script>

<template>
  <section id="anama" class="py-24 w-full bg-brand-white">
    <div class="mx-auto max-w-[1280px] flex items-center gap-14">
      <div class="space-y-10 w-2/4">
        <div>
          <h2 class="mb-2 text-5xl font-josefin-sans">Anãma</h2>
          <p>Comunidade, suporte, anonimato</p>
        </div>
        <ul class="space-y-4">
          <li
            v-for="item in items"
            :key="item.num"
            class="flex items-center gap-4"
          >
            <div class="p-3 rounded-full bg-[#F3EFE0] w-max h-max">
              <img src="/assets/check.svg" alt="check" class="h-4 w-4" />
            </div>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <Slider />
    </div>
  </section>
</template>
