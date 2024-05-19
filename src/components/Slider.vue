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
            percentage: '1.5%',
            totalText: 'do total',
            mainValue: '23',
            description: 'gerentes de nações distintas',
          },
          {
            id: 1,
            percentage: '2.0%',
            totalText: 'do time',
            mainValue: '30',
            description: 'gerentes de indústrias diferentes',
          },
          {
            id: 2,
            percentage: '2.5%',
            totalText: 'do time',
            mainValue: '38',
            description: 'gerentes mulheres',
          },
          {
            id: 3,
            percentage: '3.0%',
            totalText: 'do time',
            mainValue: '45',
            description: 'contrataram gerentes de áreas diferentes',
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
        this.autoplayInterval = setInterval(this.proximo, 3000)
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
      window.addEventListener('click', this.handleUserInteraction)
      window.addEventListener('keydown', this.handleUserInteraction)
    },
    beforeDestroy() {
      this.stopAutoplay()
      window.removeEventListener('click', this.handleUserInteraction)
      window.removeEventListener('keydown', this.handleUserInteraction)
    },
  }
</script>

<template>
  <article
    class="flex h-max w-full flex-col items-center justify-between rounded-md p-6 sm:h-[412px] sm:min-h-[444px] md:w-[352px] lg:w-[440px]"
  >
    <p class="font-semibold text-xl font-josefin-sans">
      Impactos na mudança de liderança
    </p>
    <span class="text-[10px] italic"
      >BCG diversity and innovation survey, 2017 (n=1,681)</span
    >
    <div class="w-full grow space-y-2">
      <div
        v-for="element in elements"
        :key="element.id"
        :class="{ hidden: indexAtual !== element.id }"
        class="flex h-full min-h-[228px] w-full grow flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out"
      >
        <CircleElement
          :percentage="element.percentage"
          :totalText="element.totalText"
          :mainValue="element.mainValue"
          :description="element.description"
        />
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
