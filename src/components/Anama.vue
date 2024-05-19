<script>
  import Slider from './Slider.vue'
  import CircleElement from './CircleElement.vue'

  export default {
    name: 'AppAnama',
    components: {
      Slider,
      CircleElement,
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
            text: 'Impacto na produtividade, reputação e segurança',
          },
        ],
      }
    },
  }
</script>

<template>
  <section id="anama" class="px-4 xl:px-0 py-24 w-full bg-brand-white">
    <div
      class="mx-auto max-w-[1280px] flex items-center gap-14 flex-col xl:flex-row"
    >
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
      <CircleElement
        title="Empresas com pontuações de diversidade"
        subtitle="BCG diversity and innovation survey 2017 (n=1,687)"
        below-percentage="26%"
        below-title="Abaixo da média"
        text="Receita média de inovação"
        above-percentage="45%"
        above-title="Acima da média"
      />
    </div>
  </section>
</template>
