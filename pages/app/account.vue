<template>
  <div class="account-page">
    <div class="account">
      <div class="profile flex">
        <div class="profile-image">
          <img src="https://picsum.photos/200/200" alt="profile">
        </div>
        <div class="profile-info pl-20 mt-5">

            <div class="username-options flex items-center">
              <h1 class="text-xl">{{ auth.user }}</h1>
              <button style="border:1px solid #ccc;border-radius: 3px;" class="p-1 ml-5">Edit profile</button>
              <!-- Cog icon -->
              <i class="fas fa-cog ml-5"></i>
            </div>
            <div class="user-info ml-5 mt-2">
              <ul class="flex items-center space-x-5">
                <li class="flex items-center"><span class="text-sm"><span class="font-bold">0</span> Posts</span></li>
                <li class="flex items-center"><span class="text-sm"><span class="font-bold">80</span> Followers</span></li>
                <li class="flex items-center"><span class="text-sm"><span class="font-bold">130</span> Following</span></li>
              </ul>
            </div>
          
        </div>
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
<style>
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:1280px;
  margin:auto;
}
.profile-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin:auto;
}


.account-post {
  width:380px;
  min-height: 380px !important;
  background-color: rgba(0, 0, 0, 0.25);
  border:none;
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
  width:60%;
  /* display: flex;
  align-items: center; */
}
.profile-highlights {
  width:70%;
}
.profile-highlights .highlight {
  border:2px solid lightgrey;
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

</style>