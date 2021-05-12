<template>
  <nav class='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
       aria-label='Pagination'>
    <div class='hidden sm:block'>
      <p class='text-sm text-gray-700'>
        Showing
        {{ ' ' }}
        <span class='font-medium'>{{ ((pageSize * page) - pageSize) + 1 }}</span>
        {{ ' ' }}
        to
        {{ ' ' }}
        <span class='font-medium'>{{totalCount < pageSize * page ? totalCount : pageSize * page }}</span>
        {{ ' ' }}
        of
        {{ ' ' }}
        <span class='font-medium'>{{ totalCount }}</span>
        {{ ' ' }}
        results
      </p>
    </div>
    <div class='flex-1 flex justify-between sm:justify-end'>
      <button
        :disabled='page === 1'
        @click='onClickPrevious'
        class='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
        Previous
      </button>
      <button
        :disabled='totalCount < pageSize * page'
        @click='onClickNext'
        class='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
        Next
      </button>
    </div>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Pagination',
  emits: ['next', 'previous'],
  methods: {
    // When user click next button, emit event to a parent component
    onClickNext() {
      this.$emit('next')
    },
    // When user click previous button, emit event to a parent component
    onClickPrevious() {
      this.$emit('previous')
    }
  },
  props: {
    // Current page
    page: {
      type: Number,
      required: true
    },
    // Size of display items per page
    pageSize: {
      type: Number,
      required: true
    },
    // Total items
    totalCount: {
      type: Number,
      required: true
    }
  }
})
</script>
