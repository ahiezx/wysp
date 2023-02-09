<template>
    <div class="app" v-if="auth.Authenticated">
        <MiscFontAwesome />
        <AppElementsNavbar />
        <div class="app-container">
            <slot />
        </div>
        <AppElementsFooter />
    </div>
    <div v-else>
        <AppPagesLogin />
    </div>
</template>
<style>
@font-face {
  font-family: 'Garet-Book';
  src: url('~/assets/fonts/Garet-Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
/* import Garet-Heavy.ttf from ~/assets/fonts */
@font-face {
  font-family: 'Garet-Heavy';
  src: url('~/assets/fonts/Garet-Heavy.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
    font-family: 'Garet-Book';
    background-color: #FAFAFA;
}
.font-garet-Book {
    font-family: 'Garet-Book'
}
.font-garet-heavy {
    font-family: 'Garet-Heavy'
}
.app-container {
    /* background-color: rgba(0, 0, 0, 0.5); */
    @apply pt-5 pb-5 mt-16;
}

@media (max-width: 768px) {
    .app-container {
        width: 100%;
    }
}
</style>

<script>
import { useAuthStore } from '@/stores/auth'
export default {
    setup() {
        const auth = useAuthStore()
        return {
            auth,
        };
    },
    async mounted() {
        await this.auth.verify()
    }
}
</script>