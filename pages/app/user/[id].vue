<template>
  <MiscLoading :loading="loading"></MiscLoading>
  <div class="account-page" v-if="userExists">
    <AppPagesAccount :user='user' />
  </div>
  <div class="account-page" v-else-if="!userExists && !loading">
    <h1>User not found</h1>
  </div>
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
      loading: true,
      user: {},
      username: '',
      userExists: false
    }
  },
  computed: {
    params() {
      return this.$route.params
    }
  },
  methods: {
    async checkExistence() {
      let username = this.params.id
      let response = await fetch(`http://localhost:4000/users/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.auth.user.accessToken}`
        }
      })

      if (response.ok) {
        let data = await response.json()
        this.user = data.data
        this.userExists = true
      } else {
        this.userExists = false
      }
      this.loading = false
    }
  },
  mounted() {
    this.checkExistence()
  }
}
</script>