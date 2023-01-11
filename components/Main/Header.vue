<template>
    <div class="flex justify-between w-100 p-5 text-black" style="box-shadow: 0px 6px 0px rgba(0, 0, 0, 1);z-index:999;">
        <router-link to="/"><p class="text-xl font-black">WYSP</p></router-link>
        <router-link to="/auth/login" v-if="route.name != 'auth-login'">Login</router-link>
        <router-link to="/auth/signup" v-else-if="route.name != 'auth-signup'">Signup</router-link>
    </div>
</template>

<script>

import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        return { route }
    }
}

</script>