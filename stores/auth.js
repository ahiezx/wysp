import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {

    state: () => ({
        user: null,
        token: null,
    }),

    getters: {
        Authenticated() {
            return !!this.user
        }
    },

    actions: {

        async login(username, password) {
            const response = await fetch(`http://localhost:4000/login?username=${username}&password=${password}`, {
                method: 'get'
            })
            const data = await response.json()
            if (data.status === 200) {
                this.user = data.user.username
                this.token = data.user.accessToken
            }
            // console.log(data)
            return data
        },

        async register(username, password) {
            const response = await fetch(`http://localhost:4000/register?username=${username}&password=${password}`, {
                method: 'get'
            })
            const data = await response.json()
            if (data.status === 200) {
                this.user = data.user.username
                this.token = data.user.accessToken
                console.log('registered', data)
            }
            // console.log(data, this.user, this.token)
            return data
        },

        async verify() {
            const response = await fetch(`http://localhost:4000/verify`, {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            if (response.status == 403) {
                this.user = null
                this.token = null
                console.log('token expired')
                return false
            }
            const data = await response.json()
            if(data.status != 200) {
                this.user = null
                this.token = null
                console.log('not verified')
                return false
            }
            return true

        },

        async logout() {
            this.user = null
            this.token = null
            return true
        }

    },

    persist: true,

})