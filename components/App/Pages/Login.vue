<template>
    <div class="login-component flex flex-col items-center">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login" class="w-full max-w-xs">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-3">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="**********">
        </div>
        <p v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</p>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <!-- signup button -->
            <router-link to="/auth/signup" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Sign Up
            </router-link>
        </div>
      </form>
    </div>
  </template>

<style>

/* align login-component in middle vertically and horizontally */
.login-component {
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Garet-Book';
}
</style>

<script>

import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const auth = useAuthStore()

    if(auth.Authenticated) {
      return navigateTo('/app')
    }

    const errorMessage = ref('')

    const username = ref('')
    const password = ref('')

    const login = async () => {
      try {
        let response = await auth.login(username.value, password.value)
        if (response.status === 200){
            return navigateTo('/app')
        }
        errorMessage.value = response.message
      } catch (error) {
        errorMessage.value = 'Could not login.'
      }
    }

    return {
      username,
      password,
      login,
      errorMessage
    }
  }
}
</script>