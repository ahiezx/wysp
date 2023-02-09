<template>
    <div class="navbar">
        <div class="navbar-container container mx-auto w-1/2 p-2 flex justify-between items-center">
            <div class="logo font-garet-heavy text-2xl"><router-link to="/app">WYSP</router-link></div>
            
            <AppComponentsSearch></AppComponentsSearch>

            <div class="menu">
                <ul class="flex">
                    <router-link to="/app"><li class="mr-2"><i class="fas fa-home text-xl"></i></li></router-link>
                    <li class="mr-2"><i class="fas fa-plus text-xl"></i></li>
                    <li class="mr-2"><i class="fas fa-compass text-xl"></i></li>
                    <li class="mr-2"><i class="fas fa-heart text-xl"></i></li>
                    <!-- <img src="https://picsum.photos/32/32" alt="Profile"> -->
                    <!-- image dropdown using tailwind -->
                    <li class="relative">
                        <img class="w-8 h-8 rounded-full hover:cursor-pointer" src="https://picsum.photos/32/32" alt="Profile" @click.prevent="toggleDropdown">
                        <div class="absolute right-0 w-40 bg-white shadow-lg rounded-lg py-2 mt-2 nav-dropdown" :class="{'hidden': !state}">
                            <router-link to="/app/account" class="block px-4 py-2 account-link text-neutral-600 text-sm hover:text-black">My Account</router-link>
                            <a href="#" class="block px-4 py-2 account-link text-neutral-600 text-sm hover:text-black">Notifications</a>
                            <a href="#" class="block px-4 py-2 account-link text-neutral-600 text-sm hover:text-black">Settings</a>
                            <button @click="auth.logout()" class="block px-4 py-2 account-link text-red-700 text-sm hover:text-red-500">Sign Out</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
export default {
    data() {
        return {
            state: false
        }
    },
    methods: {
    toggleDropdown (e) {
      this.state = !this.state
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.state = false
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  },  
    setup() {
        const auth = useAuthStore()
        return {
            auth
        }
    }
}
</script>

<style>
.navbar {
    color:white;
    background-color: #000000;
    min-height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}
.navbar .app-search {
    position: relative;
}
.navbar .app-search input {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    padding-right: 30px;
    color:black;
}
.navbar .app-search i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color:#000000;
}
.navbar .menu ul {
    display: flex;
    align-items: center;
}
.navbar .menu ul li {
    list-style: none;
    margin-top: 5px;
}
.navbar .menu img {
    border-radius: 50% !important;
}
.nav-dropdown {
    /* display:none; */
}


@media (max-width: 768px) {
    .navbar .app-search {
        display: none;
    }
    .navbar .menu ul {
        display: none;
    }
}

</style>
