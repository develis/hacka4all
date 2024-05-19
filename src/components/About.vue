<script>
  export default {
    name: 'AppAbout',
    data() {
      return {
        items: [
          {
            src: 'icon-bar-chart',
            icon: 'gráfico',
            text: 'Beneficio 1',
          },
          {
            src: 'icon-handshake',
            icon: 'Parceria',
            text: 'Beneficio 2',
          },
          {
            src: 'icon-conection',
            icon: 'Conexão',
            text: 'Beneficio 3',
          },
        ],
      }
    },
  }
</script>

<template>
  <section class="py-24 w-full bg-brand-white">
    <div class="mx-auto max-w-[1280px]">
      <div class="space-y-8 w-2/4">
        <div
          class="rounded-xl bg-gray-100 text-gray-900 text-sm px-3 p-2 max-w-max shadow-md uppercase tracking-widest"
        >
          Descubra
        </div>
        <div>
          <h2 class="mb-2 text-2xl font-josefin-sans">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
            amet corrupti vitae, repellendus animi.
          </p>
        </div>
        <ul class="space-y-4">
          <li
            v-for="item in items"
            :key="item.icon"
            class="flex items-center gap-4"
          >
            <div class="p-3 rounded-full bg-pink-200 w-max h-max">
              <img
                :src="`./assets/${item.src}.png`"
                :alt="item.icon"
                class="h-8 w-8"
              />
            </div>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
