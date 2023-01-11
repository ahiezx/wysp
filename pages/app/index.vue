<template>
    <div class="app-home-page flex justify-between container mx-auto" style="width:880px;">
        <div class="feed">
            <div class="stories p-2 pl-4 flex items-center">
                <div class="st pb-2 flex items-center overflow-x-auto">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                </div>
            </div>
            <div class="posts mt-4" v-for="item in 5">
                <div class="post">
                    <div class="post-header flex items-center justify-between" style="border-bottom:2px solid grey;">
                        <div class="flex items-center p-2 pl-3">
                            <img src="https://picsum.photos/30/30" alt="Story" class="element-story">
                            <p class="ml-2 font-semibold text-sm">Stokleyy</p>
                        </div>
                        <i class="fas fa-ellipsis-h pr-6"></i>
                    </div>
                    <div class="post-image">
                        <img src="https://picsum.photos/1200/1200" alt="Post" class="w-full">
                    </div>
                    <div class="post-options">
                        <div class="flex justify-between">
                            <div class="flex">
                                <i class="far fa-heart text-2xl p-3"></i>
                                <i class="far fa-comment text-2xl p-3"></i>
                                <i class="far fa-paper-plane text-2xl p-3"></i>
                            </div>
                            <i class="far fa-bookmark text-2xl p-3"></i>
                        </div>
                    </div>
                    <div class="post-likes">
                        <p class="text-sm font-semibold p-2 pl-3">Liked by <span class="text-black">Stokleyy</span> and <span class="text-black">others</span></p>
                    </div>
                    <div class="post-caption">
                        <p class="text-sm p-2 pl-3"><span class="text-black font-semibold">Stokleyy:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div class="post-comments">
                        <div class="comment items-center p-2 pl-3">
                            <div class="flex items-center">
                                <img src="https://picsum.photos/30/30" alt="Story" class="element-story">
                                <p class="ml-2 font-semibold text-sm">Stokleyy</p>
                            </div>
                            <div>
                                <p class="ml-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar text-white p-4 mt-2">
            <div class="sidebar-profile flex items-center justify-between">
                <div class="flex items-center text-black font-bold text-sm">
                    <img src="https://picsum.photos/50/50" alt="Story" class="element-story">
                    <p>Stokleyy</p>
                </div>
                <a href="#" class="text-blue-400 font-semibold text-xs">Switch</a>
            </div>
            <div class="flex justify-between">
                <p class="text-gray-500 font-semibold text-xs mt-3">Suggestions for you</p>
                <a href="#" class="text-neutral-800 font-semibold text-xs mt-3">See All</a>
            </div>
            <div class="flex mt-4 items-center justify-between" v-for="item in ['Ahmad','Alex','Max','Zbi','Kosher']">
                <div class="flex items-center">
                    <img src="https://picsum.photos/32/32" alt="Story" class="rounded-full" style="width:32px;height:32px;object-fit: cover;">
                    <div class="ml-3">
                        <p class="text-black">{{item}}</p>
                        <p class="text-gray-500 font-semibold text-xs">Followed by ...</p>
                    </div>
                </div>
                <a href="#" class="text-blue-400 text-xs">Follow</a>
            </div>
            <div class="text-gray-500 text-xs mt-4">
                About &#x2022; Help &#x2022; Press &#x2022; API &#x2022; Jobs &#x2022; Privacy &#x2022; Terms &#x2022; Locations &#x2022; Language                
            </div>
            <div class="text-gray-500 text-xs mt-4">
                &copy; 2020 WYSP
            </div>
        </div>
    </div>
</template>

<style>
.stories {
    width:500px;
    min-height: 100px;
    border-radius: 8px;
    border:1px solid rgb(184, 184, 184);
    background-color: rgba(255,255,255,1);
}
.element-story {
    border-radius: 50%;
    margin-right: 10px;
    border:2px solid rgb(184, 184, 184);
    padding: 2px;
}
/* stories scroll */
.stories .st::-webkit-scrollbar {
    height: 5px;
    /* display: none; */
    border-radius: 10px;
}
.stories .st::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
}
.stories .st::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 10px;
}
.stories .st::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
}

.app-home-page .sidebar{
    width: 320px;
    /* fixed */
  position: sticky;
  top: 0;
  height: max-content;  /* set the height of the element */
  overflow-y: auto;  /* add scrollbars if needed */
    
}
.post {
    width: 500px;
    min-height: 500px;
    border-radius: 8px;
    border:1px solid rgb(184, 184, 184);
    background-color: rgba(255,255,255,1);
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .app-home-page .sidebar{
        width: 100%;
    }
    .stories {
        width: 100%;
    }
    .post {
        width: 100%;
    }
}

</style>

<!-- Layout: app.vue -->
<script>
definePageMeta({
  layout: "app",
});
</script>