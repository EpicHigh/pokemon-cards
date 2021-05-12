<template>
  <header
    class='bg-white shadow-sm lg:static lg:overflow-y-visible'>
    <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div class='relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8 border-b-2	border-gray-600'>
        <div class='flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2'>
          <div class='flex-shrink-0 flex items-center'>
            <img class='block h-8 w-auto'
                 src='../assets/pokeball.png' alt='Pokemball' />
          </div>
        </div>
        <div class='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6'>
          <div class='flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0'>
            <div class='w-full'>
              <label for='search' class='sr-only'>Search by {{ searchBy }}</label>
              <div class='relative'>
                <input id='search' name='search'
                       class='block w-full bg-white border border-gray-300 rounded-md py-2 pl-2 md:pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm'
                       :placeholder='`Search by ${searchBy}, Please press enter to search`' type='search'
                       :disabled='!searchBy'
                       @keypress.enter='onEnter' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class='py-4 grid md:grid-cols-3 sm:grid-cols-1 lg:w-2/4 gap-4'>
        <select @change='onChangeType' :disabled='!(searchBy === "" || searchBy === "card")'
                class='bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'>
          <option value=''>Select type</option>
          <option v-for='type in types' :value='type' :key='type'>{{ type }}</option>
        </select>
        <select @change='onChangeRarity' :disabled='!(searchBy === "" || searchBy === "card")'
                class='bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'>
          <option value=''>Select rarity</option>
          <option v-for='rarity in rarities' :value='rarity' :key='rarity'>{{ rarity }}</option>
        </select>
        <select @change='onChangeSearchBy' v-model='searchBy'
                class='bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'>
          <option value=''>Search by</option>
          <option value='card'>Card</option>
          <option value='set'>Set</option>
        </select>
      </nav>
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { getTypes, getRarities } from '../api'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      selectedType: '',
      searchBy: '',
      types: [] as string[],
      rarities: [] as string[]
    }
  },
  emits: ['changeType', 'changeRarity', 'enter', 'changeSearchBy'],
  methods: {
    // Fired when user focus on the input and press enter, and emit the value to a parent component.
    onEnter(e) {
      this.$emit('enter', e.target.value)
    },
    // Fired when value in type selection has changed, and emit the value to a parent component.
    onChangeType(e) {
      this.$emit('changeType', e.target.value)
    },
    // Fired when value in rarity selection has changed, and emit the value to a parent component.
    onChangeRarity(e) {
      this.$emit('changeRarity', e.target.value)
    },
    // Fired when value in search by selection has changed, and emit the value to a parent component.
    onChangeSearchBy(e) {
      this.$emit('changeSearchBy', e.target.value)
    },
    // Load the rarities from the API, and if an error happens, show a warning.
    async loadTypes() {
      try {
        const response = await getTypes()
        const { data } = response.data
        this.types = data
      } catch (e) {
        alert(e.message)
      }
    },
    // Load the rarities from the API, and if an error happens, show a warning.
    async loadRarities() {
      try {
        const response = await getRarities()
        const { data } = response.data
        this.rarities = data
      } catch (e) {
        alert(e.message)
      }
    }
  },
  async beforeMount() {
    await this.loadTypes()
    await this.loadRarities()
  }
})
</script>
