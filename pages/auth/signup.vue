<template>
    <div class="signup-component flex flex-col items-center">
        <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
        <form @submit.prevent="signup" class="w-full max-w-xs">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input v-model="username"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input v-model="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="Email">
            </div>
            <div class="mb-6">
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
                    Sign Up
                </button>
                <!-- login button -->
                <router-link to="/auth/login"
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Login
                </router-link>
            </div>
        </form>
    </div>
</template>

<style>
/* align login-component in middle vertically and horizontally */
.signup-component {
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

        if (auth.Authenticated) {
            return navigateTo('/app')
        }


        const errorMessage = ref('')

        const username = ref('')
        const email = ref('')
        const password = ref('')

        const signup = async () => {
            try {
                let response = await auth.register(username.value, password.value)
                if (response.status === 200) {
                    return navigateTo('/app')
                }
                errorMessage.value = response.message
            } catch (error) {
                errorMessage.value = 'Could not login.'
            }
        }

        return {
            username,
            email,
            password,
            signup,
            errorMessage
        }
    }
}

</script>