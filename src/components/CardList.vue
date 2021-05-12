<template>
  <div class='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
    <ul role='list'
        class='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
      <li v-if='searchBy !== "set" && cards.length !== 0' v-for='card in cards' :key='card.id' class='relative'>
        <div
          class='block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
          <img :src='card.images.small' :alt='card.name'
               class='mx-auto object-cover pointer-events-none group-hover:opacity-75' />
        </div>
        <p class='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>{{ card.name }}</p>
        <p class='block text-sm font-medium text-gray-500 pointer-events-none'>{{ card.rarity }}</p>
      </li>
      <li v-if='searchBy !== "card" && sets.length !== 0' v-for='set in sets' :key='set.id' class='relative'>
        <div
          class='block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
          <img :src='set.images.logo' :alt='set.name'
               class='mx-auto object-cover pointer-events-none group-hover:opacity-75' />
        </div>
        <p class='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>{{ set.name }}</p>
        <p class='block text-sm font-medium text-gray-500 pointer-events-none'>{{ set.series }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardList',
  props: {
    // Value of search by selection from navbar
    searchBy: {
      type: String,
      required: true
    },
    // A card list
    cards: {
      type: Array,
      default: function() {
        return []
      },
      required: true
    },
    // A list of set
    sets: {
      type: Array,
      default: function() {
        return []
      },
      required: true
    }
  }
})
</script>
