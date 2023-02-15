<template>
    <div class="account" v-if="user">

        <div class="account-modal" v-if="modalFollowers">
            <div class="account-modal-content">

                <div class="account-modal-header flex justify-between">
                    <h1 class="text-xl">Followers</h1>
                    <button @click="getFollowers" class="text-neutral-500 text-xs">Close</button>
                </div>

                <hr class="mt-2">

                <div class="account-modal-list mt-3">
                    <div class="account-modal-list-item flex justify-between mx-auto mt-3"
                        v-for="mutual in mutualFollowers" v-bind:key="mutual">

                        <div class="account-modal-list-item-info flex items-center">
                            <div class="account-modal-list-item-image">
                                <img src="https://picsum.photos/32/32" class="rounded-full" alt="profile">
                            </div>
                            <div class="account-modal-list-item-info ml-3">
                                <router-link :to="`/app/user/${mutual.username}`" class="text-sm">{{
                                    mutual.username
                                }}</router-link>
                            </div>
                        </div>

                        <button class="text-neutral-800 text-xs pl-2 pr-2 rounded-sm"
                            style="border: 1px solid lightgray;box-shadow:0px 0px 2px black;"
                            @click="unfollowItem(mutual)">Following</button>

                    </div>

                    <div class="account-modal-list-item flex justify-between mx-auto mt-3" v-for="follower in followers"
                        v-bind:key="follower">

                        <div class="account-modal-list-item-info flex items-center">
                            <div class="account-modal-list-item-image">
                                <img src="https://picsum.photos/32/32" class="rounded-full" alt="profile">
                            </div>
                            <div class="account-modal-list-item-info ml-3">
                                <router-link :to="`/app/user/${follower.username}`" class="text-sm">{{
                                    follower.username
                                }}</router-link>
                            </div>
                        </div>

                        <button class="text-blue-500" @click="followItem(follower)" v-if="auth.user.id != follower.id">Follow</button>
                        

                    </div>
                </div>

            </div>
        </div>

        <div class="account-modal" v-if="modalFollowing">
            <div class="account-modal-content">

                <div class="account-modal-header flex justify-between">
                    <h1 class="text-xl">Following</h1>
                    <button @click="getFollowing" class="text-neutral-500 text-xs">Close</button>
                </div>

                <hr class="mt-2">

                <div class="account-modal-list mt-3">

                    <div class="account-modal-list-item flex justify-between mx-auto mt-3"
                        v-for="mutual in mutualFollowing" v-bind:key="mutual">

                        <div class="account-modal-list-item-info flex items-center">
                            <div class="account-modal-list-item-image">
                                <img src="https://picsum.photos/32/32" class="rounded-full" alt="profile">
                            </div>
                            <div class="account-modal-list-item-info ml-3">
                                <router-link :to="`/app/user/${mutual.username}`" class="text-sm">{{
                                    mutual.username
                                }}</router-link>
                            </div>
                        </div>

                        <button class="text-neutral-800 text-xs pl-2 pr-2 rounded-sm"
                            style="border: 1px solid lightgray;box-shadow:0px 0px 2px black;" @click="unfollowItem(mutual)">Following</button>

                    </div>

                    <div class="account-modal-list-item flex justify-between mx-auto mt-3"
                        v-for="following in following" v-bind:key="following">

                        <div class="account-modal-list-item-info flex items-center">
                            <div class="account-modal-list-item-image">
                                <img src="https://picsum.photos/32/32" class="rounded-full" alt="profile">
                            </div>
                            <div class="account-modal-list-item-info ml-3">
                                <router-link :to="`/app/user/${following.username}`" class="text-sm">{{
                                    following.username
                                }}</router-link>
                            </div>
                        </div>

                        <button class="text-blue-500" @click="followItem(following)" v-if="auth.user.id != following.id">Follow</button>

                    </div>
                </div>

            </div>
        </div>

        <div class="profile flex">
            <div class="profile-image">
                <img :src="user.avatar" alt="profile">
            </div>
            <div class="profile-info pl-20 mt-5">

                <div class="username-options flex items-center">
                    <h1 class="text-xl">{{ user.username }}</h1>
                    <div v-if="auth.user.username == user.username">
                        <router-link :to="`/app/editprofile`" style="border:1px solid #ccc;border-radius: 3px;" class="p-1 ml-4">Edit profile</router-link>
                        <!-- Cog icon -->
                        <i class="fas fa-cog ml-2"></i>
                    </div>
                    <div v-else>
                        <button v-if="!followed" @click="follow" style="border:1px solid #ccc;border-radius: 3px;"
                            class="p-1 pl-5 pr-5 ml-5">Follow</button>
                        <button v-else @click="follow" style="border:1px solid red;border-radius: 3px;color: red;"
                            class="p-1 pl-5 pr-5 ml-5">Unfollow</button>
                        <!-- Cog icon -->
                        <i class="fas fa-ellipsis-h ml-5"></i>
                    </div>
                </div>
                <div class="user-info ml-5 mt-2">
                    <ul class="flex items-center space-x-5">
                        <li class="flex items-center"><span class="text-sm"><span class="font-bold">0</span>
                                Posts</span></li>
                        <li class="flex items-center cursor-pointer" @click="getFollowers"><span class="text-sm"><span
                                    class="font-bold">{{
                                        user.followers
                                    }}</span>
                                Followers</span></li>
                        <li class="flex items-center cursor-pointer" @click="getFollowing"><span class="text-sm"><span
                                    class="font-bold">{{
                                        user.following
                                    }}</span>
                                Following</span></li>
                    </ul>
                </div>

            </div>
            <p class="text-xs">{{ user.id }}</p>
        </div>
        <div class="profile-highlights flex space-x-5 p-3 mt-10 mb-5">
            <div class="highlight">
                <img src="https://picsum.photos/80/80" class="rounded-full" alt="highlight">
            </div>
            <div class="highlight">
                <img src="https://picsum.photos/80/80" class="rounded-full" alt="highlight">
            </div>
        </div>
        <hr style="background-color: black;height: 2px; width: 100%;" class="mt-7">
        <div class="profile-sections">
            <ul class="flex space-x-20 text-neutral-400 font-bold">
                <li class="p-4 flex items-center">
                    <!-- fontawesome posts -->
                    <i style="font-size:10px;" class="pr-1 text-neutral-500 fas fa-th"></i>
                    Posts
                </li>
                <li class="p-4 flex items-center">
                    <!-- fontawesome saved -->
                    <i style="font-size:10px;" class="pr-1 text-neutral-500 fas fa-bookmark"></i>
                    Saved
                </li>
                <li class="p-4 flex items-center">
                    <!-- fontawesome tagged -->
                    <i style="font-size:10px;" class="pr-1 text-neutral-500 fas fa-tag"></i>
                    Tagged
                </li>
            </ul>
        </div>
        <div class="profile-posts p-5 bg-neutral-200" style="width:100%;">
            <div class="account-post hover:cursor-pointer" v-for="item in 8">
                <div class="account-post-overlay absolute mx-auto text-center flex items-center justify-center">
                    <div class="account-post-overlay-content">
                        <h1 class="text-white
              text-2xl">Post Title</h1>
                        <p class="text-white">Post Description</p>
                    </div>
                </div>
                <img src="https://picsum.photos/380/380" alt="post" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</template>

<!-- use props to show username -->

<script>

import { useAuthStore } from '@/stores/auth'

export default {
    setup() {
        const auth = useAuthStore()
        return {
            auth,
        };
    },
    name: 'Account',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            followed: this.user.followed,
            modalFollowers: false,
            modalFollowing: false,
            followers: [],
            following: [],
            mutualFollowers: [],
            mutualFollowing: []
        }
    },
    methods: {
        async follow() {
            // send api request to follow user using localhost:4000/users/:id/follow

            const token = this.auth.user.accessToken;

            await new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`http://localhost:4000/users/${this.user.id}/follow`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        this.followed = !this.followed;
                        if (data.followed) {
                            this.user.followers++;
                        } else {
                            this.user.followers--;
                        }
                    }
                    console.log(data);
                    resolve();
                }, 250);
            });

        },
        async followItem(user) {

            const token = this.auth.user.accessToken;

            await new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`http://localhost:4000/users/${user.id}/follow`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        if (this.modalFollowers) {
                            this.followers = this.followers.filter((item) => item.id !== user.id);
                            this.mutualFollowers.push(user);
                        } else {
                            this.following = this.following.filter((item) => item.id !== user.id);
                            this.mutualFollowing.push(user);
                        }
                    }
                    console.log(data);
                    resolve();
                }, 250);
            })
            
        },
        async unfollowItem(user) {

            const token = this.auth.user.accessToken;

            await new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`http://localhost:4000/users/${user.id}/follow`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        if (this.modalFollowers) {
                            this.mutualFollowers = this.mutualFollowers.filter((item) => item.id !== user.id);
                            this.followers.push(user);
                        } else {
                            this.mutualFollowing = this.mutualFollowing.filter((item) => item.id !== user.id);
                            this.following.push(user);
                        }
                    }
                    console.log(data);
                    resolve();
                }, 250);
            })

        },
        async getFollowers() {
            this.modalFollowers = !this.modalFollowers;


            const token = this.auth.user.accessToken;

            await new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`http://localhost:4000/users/${this.user.id}/followers`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        this.followers = data.data.followers;
                        this.mutualFollowers = data.data.mutuals;

                        // get mutual followers data details from followers array by searching for mutuals id
                        this.mutualFollowers = this.followers.filter((followers) => {
                            return this.mutualFollowers.some((mutual) => {
                                return mutual === followers.id;
                            })
                        })

                        // subtract mutual followers from followers array
                        this.followers = this.followers.filter((followers) => {
                            return !this.mutualFollowers.some((mutual) => {
                                return mutual.id === followers.id;
                            })
                        })



                    }
                    console.log(data);
                    resolve();
                }, 250);
            });


        },
        async getFollowing() {
            this.modalFollowing = !this.modalFollowing;

            const token = this.auth.user.accessToken;

            await new Promise((resolve) => {
                setTimeout(async () => {
                    const res = await fetch(`http://localhost:4000/users/${this.user.id}/following`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        this.following = data.data.following;
                        this.mutualFollowing = data.data.mutuals;

                        // get mutual following data details from following array by searching for mutuals id
                        this.mutualFollowing = this.following.filter((following) => {
                            return this.mutualFollowing.some((mutual) => {
                                return mutual === following.id;
                            })
                        })

                        // subtract mutual following from following array
                        this.following = this.following.filter((following) => {
                            return !this.mutualFollowing.some((mutual) => {
                                return mutual.id === following.id;
                            })
                        })



                    }
                    // console.log(data);
                    resolve();
                }, 250);
            });
        },
    }
}

</script>

<style>
.account {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    margin: auto;
}

.profile-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    margin: auto;
}


.account-post {
    width: 380px;
    min-height: 380px !important;
    background-color: rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
    @apply m-3;
}

.account-post img {
    width: 380px;
    height: 380px;
    border-radius: 5px !important;
}

.account-post-overlay {
    width: 380px;
    height: 380px;
    background-color: rgba(0, 0, 0, 0.65);
    border-radius: 5px !important;
}

.profile {
    width: 60%;
    /* display: flex;
  align-items: center; */
}

.profile-highlights {
    width: 70%;
}

.profile-highlights .highlight {
    border: 2px solid lightgrey;
    @apply p-0.5;
    border-radius: 50%;
}

.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.profile h1 {
    margin-left: 1em;
}

.account-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}

.account-modal .account-modal-content {
    width: 20%;
    height: 50%;
    background-color: white;
    border-radius: 5px;
    margin: auto;
    margin-top: 10%;
    padding: 1em;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
}
</style>