<template>
  <div class='min-h-screen flex'>
    <div class='flex-1 bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
      <div class='mx-auto w-full max-w-sm lg:w-96'>
        <div>
          <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>
            404
          </h2>
          <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>
            Not found - We couldn't find your page
          </h2>
        </div>
      </div>
    </div>
    <div class='hidden lg:block relative w-0 flex-1'>
      <div class='absolute grass h-full w-full' />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<style scoped>

.grass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>