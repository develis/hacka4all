<script>
  import CircleElement from './CircleElement.vue'

  export default {
    name: 'AppSlider',
    components: {
      CircleElement,
    },
    data() {
      return {
        indexAtual: 0,
        elements: [
          {
            id: 0,
            img: 'person-1',
            name: 'Elsa Ribeiro',
            role: 'Analista de Sustentabilidade',
            diversity: 'Preta, Trans, Indígena',
            testimonial:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusamus nulla aliquam vitae atque excepturi totam vel architecto, sapiente voluptatibus quas, ad amet earum porro nam quis saepe ut assumenda?',
          },
          {
            id: 1,
            img: 'person-2',
            name: 'Maria Oliveia',
            role: 'Vendas',
            diversity: 'LGBTQIA+, Gestor, Mulher, Preta',
            testimonial:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusamus nulla aliquam vitae atque excepturi totam vel architecto, sapiente voluptatibus quas, ad amet earum porro nam quis saepe ut assumenda?',
          },
          {
            id: 2,
            img: 'person-3',
            name: 'Olavo Silva',
            role: 'Desginer',
            diversity: 'PCD',
            testimonial:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusamus nulla aliquam vitae atque excepturi totam vel architecto, sapiente voluptatibus quas, ad amet earum porro nam quis saepe ut assumenda?',
          },
          {
            id: 3,
            img: 'person-4',
            name: 'Mario Fernandes',
            role: 'Vendedor de seguro',
            diversity: 'Trans, Preto retinto',
            testimonial:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusamus nulla aliquam vitae atque excepturi totam vel architecto, sapiente voluptatibus quas, ad amet earum porro nam quis saepe ut assumenda',
          },
        ],
        autoplayInterval: null,
      }
    },
    methods: {
      proximo() {
        this.indexAtual = (this.indexAtual + 1) % this.elements.length
      },
      anterior() {
        this.indexAtual =
          (this.indexAtual - 1 + this.elements.length) % this.elements.length
      },
      goToSlide(index) {
        this.indexAtual = index
        this.handleUserInteraction()
      },
      startAutoplay() {
        this.autoplayInterval = setInterval(this.proximo, 9000)
      },
      stopAutoplay() {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      },
      handleUserInteraction() {
        this.stopAutoplay()
      },
    },
    mounted() {
      this.startAutoplay()
    },
    beforeDestroy() {
      this.stopAutoplay()
    },
  }
</script>

<template>
  <article
    class="flex h-max w-full flex-col items-center justify-between rounded-md p-6 sm:h-[470px] sm:min-h-[300px] md:w-[500px] lg:w-[780px] bg-white shadow"
  >
    <div class="w-full grow space-y-2">
      <div
        v-for="element in elements"
        :key="element.id"
        :class="{ hidden: indexAtual !== element.id }"
        class="flex h-full min-h-[228px] w-full grow flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out"
      >
        <div class="space-y-4 flex flex-col items-center justify-center gap-2">
          <div class="rounded-full w-32 h-32 overflow-hidden shadow-lg">
            <img
              :src="`./assets/${element.img}.jpeg`"
              alt="Pessoas"
              class="object-cover w-full h-full"
            />
          </div>
          <h3 class="text-2xl font-josefin-sans text-gray-900 font-medium">
            {{ element.name }}
          </h3>
          <div>
            <span
              class="mr-2 p-3 px-5 bg-[#400000] text-white rounded-full text-sm"
              >{{ element.role }}</span
            >
            <span
              class="p-3 px-5 bg-[#881600] text-white rounded-full text-sm"
              >{{ element.diversity }}</span
            >
          </div>
          <p class="p-6 text-center">{{ element.testimonial }}</p>
        </div>
      </div>
    </div>
    <div
      class="mt-2 flex w-full flex-wrap items-center justify-center gap-4 sm:mt-0"
    >
      <div class="flex items-center">
        <button
          v-for="info in elements"
          :key="info.id"
          type="button"
          aria-label="Controle"
          class="mr-3 h-3 w-3 cursor-pointer rounded-full focus:outline-none focus:ring-4 focus:ring-gray-400"
          :class="{
            'bg-gray-800': indexAtual === info.id,
            'bg-gray-200': indexAtual !== info.id,
          }"
          @click="goToSlide(info.id)"
        ></button>
      </div>
    </div>
  </article>
</template>
