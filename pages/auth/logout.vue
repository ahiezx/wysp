<template>
    <div>
        <p>You are being logged out..</p>
    </div>
</template>

<script>

import { useAuthStore } from '@/stores/auth'

export default {
    setup() {
        const auth = useAuthStore()
        // settimeout to allow logout to complete and then navigate to login page
        setTimeout(() => {
            auth.logout()
            return navigateTo('/auth/login')
        }, 1500)
    }
}

</script>