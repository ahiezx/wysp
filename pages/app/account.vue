<template>
    <AppPagesAccount :user="auth.user" />
</template>
<script>
import { useAuthStore } from '@/stores/auth'

definePageMeta({
  layout: "app",
});
export default {
  setup() {
    const auth = useAuthStore()
    return {
      auth,
    };
  },
  data() {
    return {
      username: '',
      name: '',
      email: '',
      bio: ''
    }
  },
  methods: {
    logout() {
      // log out the user
    }
  }
}
</script>