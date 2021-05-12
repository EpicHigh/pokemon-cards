<template>
  <div class='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <div class='p-4 grass rounded-2xl max-w-md w-full space-y-8'>
      <div>
        <img class='mx-auto h-12 w-auto' src='../assets/pokeball.png'
             alt='Pokeball' />
        <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Login to your account
        </h2>
      </div>
      <form class='space-y-6' @submit.prevent='onSubmit'>
        <div class='rounded-md shadow-sm -space-y-px'>
          <div>
            <label for='email-address' class='sr-only'>Email address</label>
            <input id='email-address' name='email' type='email' autocomplete='email' required
                   class='transition delay-150 duration-300 ease-linear appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 sm:text-sm'
                   placeholder='Email address' v-model='email' />
          </div>
          <div>
            <label for='password' class='sr-only'>Password</label>
            <input id='password' name='password' type='password' autocomplete='current-password' required
                   class='transition delay-150 duration-300 ease-linear appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:z-10 sm:text-sm'
                   placeholder='Password' v-model='password' />
          </div>
        </div>
        <div>
          <button type='submit'
                  class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // onSubmit save email and password to local storage
    onSubmit() {
      localStorage.setItem('email', this.email)
      localStorage.setItem('password', this.password)
    }
  }
})
</script>

<style scoped>
.grass {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>