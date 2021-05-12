<template>
  <Navbar @change-type='onChangeType' @change-rarity='onChangeRarity' @enter='onEnter'
          @change-search-by='onChangeSearchBy' />
  <CardList :search-by='searchBy' :sets='sets' :cards='cards' />
  <Pagination @next='onNext' @previous='onPrevious' :total-count='pagination.totalCount' :page='pagination.page'
              :page-size='pagination.pageSize' />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Navbar from './Navbar.vue'
import Pagination from './Pagination.vue'
import CardList from './CardList.vue'
import { getCards, getSets } from '../api'
import { Card, Set } from '../types'

export default defineComponent({
  name: 'Container',
  data() {
    return {
      pagination: {
        page: 1,
        totalCount: 0,
        pageSize: 20
      },
      searchBy: '',
      keyword: '',
      type: '',
      rarity: '',
      cards: [] as Card[],
      sets: [] as Set[]
    }
  },
  methods: {
    // Load the cards from the API, and if an error happens, show a warning.
    async loadCard(q?: string) {
      try {
        const response = await getCards({ page: 1, pageSize: 20, q })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.cards = data
      } catch (e) {
        alert(e.message)
      }
    },
    // Load the sets from the API, and if an error happens, show a warning.
    async loadSets(q?: string) {
      try {
        const response = await getSets({ page: 1, pageSize: 20, q })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.sets = data
      } catch (e) {
        alert(e.message)
      }
    },
    // The query concatenation method checks the property is exist then concat the string
    query(): string {
      let q = ''
      if (this.rarity) {
        q += `rarity:"${this.rarity}"`
      }
      if (this.type) {
        q += q ? ' ' + `types:"${this.type}"` : '' + `types:"${this.type}"`
      }
      if (this.keyword) {
        q += q ? ' ' + `name:"${this.keyword}"` : '' + `name:"${this.keyword}"`
      }
      return q
    },
    // Fired when press enter
    async onEnter(value) {
      if (this.searchBy === 'card') {
        this.keyword = value
        await this.loadCard(this.query())
      } else {
        await this.loadSets(this.query())
      }
    },
    // Fired when value in rarity selection has changed
    async onChangeRarity(value: string) {
      if (value) {
        this.rarity = value
        await this.loadCard(this.query())
      } else {
        await this.loadCard()
      }
    },
    // Fired when value in type selection has changed
    async onChangeType(value: string) {
      if (value) {
        this.type = value
        await this.loadCard(this.query())
      } else {
        await this.loadCard()
      }
    },
    // Fired when value in search by selection has changed
    async onChangeSearchBy(value: string) {
      this.searchBy = value
      if (value === 'card') {
        await this.loadCard()
      } else {
        await this.loadSets()
      }
    },
    // Go to next page
    async onNext() {
      if (this.searchBy === 'sets') {
        const response = await getSets({ page: this.pagination.page + 1, pageSize: 20, q: this.query() })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.sets = data
      } else {
        const response = await getCards({ page: this.pagination.page + 1, pageSize: 20, q: this.query() })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.cards = data

      }
    },
    // Back to previous page
    async onPrevious() {
      if (this.searchBy === 'sets') {
        const response = await getSets({ page: this.pagination.page - 1, pageSize: 20, q: this.query() })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.sets = data
      } else {
        const response = await getCards({ page: this.pagination.page - 1, pageSize: 20, q: this.query() })
        const { data, page, pageSize, totalCount } = response.data
        this.pagination = { page, pageSize, totalCount }
        this.cards = data
      }
    }
  },
  // Load card before component will mount
  async beforeMount() {
    await this.loadCard()
  },
  components: {
    Navbar,
    Pagination,
    CardList
  }
})
</script>
