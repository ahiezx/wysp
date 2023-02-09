import { defineStore } from 'pinia'

function decodeJWT(token) {
    const [headerEncoded, payloadEncoded, signatureEncoded] = token.split(".");
  
    // Base64Url decode the header and payload
    const header = JSON.parse(Buffer.from(headerEncoded, 'base64').toString());
    const payload = JSON.parse(Buffer.from(payloadEncoded, 'base64').toString());
  
    // Verify the signature
    // ...
  
    return { header, payload };
  }

export const useAuthStore = defineStore('auth', {

    state: () => ({
        user: null,
        token: null,
        expiry: null
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
                this.user = data.user
                this.token = data.user.accessToken
                this.expiry = data.user.expiresIn
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
                this.user = data.user
                this.token = data.user.accessToken
                this.expiry = data.user.expiresIn
                console.log('registered', data)
            }
            // console.log(data, this.user, this.token)
            return data
        },

        async verify() {

            // turn expireIn into unix time using date.now()

            console.log(Math.floor(Date.now() / 1000), this.expiry)

            if (this.expiry < Math.floor(Date.now() / 1000)) {
                this.user = null
                this.token = null
                console.log('token expired')
                return false
            }

            // const response = await fetch(`http://localhost:4000/verify`, {
            //     method: 'get',
            //     headers: {
            //         'Authorization': `Bearer ${this.token}`
            //     }
            // })
            // if (response.status == 403) {
            //     this.user = null
            //     this.token = null
            //     console.log('token expired')
            //     return false
            // }
            // const data = await response.json()
            // if(data.status != 200) {
            //     this.user = null
            //     this.token = null
            //     console.log('not verified')
            //     return false
            // }
            // return true

        },

        async logout() {
            this.user = null
            this.token = null
            return true
        }

    },

    persist: true,

})