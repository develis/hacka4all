<script>
  export default {
    name: 'CircleElement',
    props: {
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
      belowPercentage: {
        type: String,
        default: '',
      },
      belowTitle: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      abovePercentage: {
        type: String,
        default: '',
      },
      aboveTitle: {
        type: String,
        default: '',
      },
    },
    computed: {
      belowPercentageStyle() {
        return {
          '--percentage': this.belowPercentage,
        }
      },
      abovePercentageStyle() {
        return {
          '--percentage': this.abovePercentage,
        }
      },
    },
  }
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-4 w-full md:w-58 h-58"
  >
    <div class="mb-3 flex flex-col justify-center items-center">
      <h3 class="text-2xl font-bold text-center font-josefin-sans">
        {{ title }}
      </h3>
      <p class="text-xs italic">{{ subtitle }}</p>
    </div>
    <div
      class="w-full flex flex-col md:flex-row justify-center items-start gap-8"
    >
      <div class="w-full flex flex-col items-center gap-2">
        <h4 class="px-3 text-xl font-josefin-sans text-center font-bold">
          {{ belowTitle }}
        </h4>
        <div
          class="w-52 h-52 md:w-56 md:h-56 border-[20px] p-2 rounded-full flex flex-col justify-center items-center text-gray-900 bg-brand-white border-red-500"
        >
          <span class="text-red-500 text-4xl font-bold">{{
            belowPercentage
          }}</span>
          <p class="mt-2 text-center text-sm">{{ text }}</p>
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-2">
        <h4 class="px-3 text-xl font-josefin-sans text-center font-bold">
          {{ aboveTitle }}
        </h4>
        <div
          class="w-60 h-60 md:w-64 md:h-64 border-[20px] p-2 rounded-full flex flex-col justify-center items-center gap-5 text-gray-900 border-green-500 text-center bg-brand-white"
        >
          <span class="text-green-500 text-6xl font-bold h-9">{{
            abovePercentage
          }}</span>
          <p class="mt-2 text-center text-sm px-2">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
