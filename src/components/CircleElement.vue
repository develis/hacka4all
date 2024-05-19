<script>
  export default {
    name: 'CircleElement',
    props: {
      percentage: {
        type: String,
        required: true,
      },
      totalText: {
        type: String,
        required: true,
      },
      mainValue: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  }
</script>

<template>
  <div class="relative flex justify-center items-center w-58 h-58">
    <div
      class="absolute -top-8 -left-20 w-36 h-36 border-8 p-1 rounded-full flex flex-col justify-center items-center text-gray-900 bg-brand-white border-green-500"
    >
      <span class="text-green-500 text-4xl font-bold">{{ percentage }}</span>
      {{ totalText }}
    </div>
    <div
      class="w-56 h-56 p-2 rounded-full flex flex-col justify-center items-center gap-5 text-gray-900 border-8 border-red-500 text-center bg-brand-white"
    >
      <span class="text-red-500 text-6xl font-bold h-9">{{ mainValue }}</span>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
