<template>
  <div>

    <section class="introduction mt-1">
      <div class="i-section" style="background-color: #FF90E8;">
        <!-- <img src="~/assets/svg/man-chat.svg" alt="Intro"> -->
        <h1 class="text-7xl text-black">Welcome To <span class="text-white" style="position: relative;left:50px;">WYSP.Social</span></h1>
      </div>
      <div class="i-section" style="background-color: #E8FFA8;">
        <p class="text-4xl text-black">
          WYSP is a social media platform that allows you to connect with people around the world. You can create a profile, post, and interact with other users.
          <br><br>
          People can also create groups and invite others to join. Groups can be public or private. You can also create a group chat with other users.
        </p>
      </div>      
    </section>
    
    <section class="download p-10" style="background-color: #ddd;">
      <div class="d-section">
        <h1 class="text-7xl text-black text-center">Download</h1>
      </div>
      <div class="d-section">
        <p class="text-2xl text-black text-center mx-auto p-5 text-neutral-700 w-1/2">
          WYSP is currently in development. You can download the latest version of the app from the links below.
        </p>
        <div class="flex justify-center">
          <a href="https://play.google.com/store/apps/details?id=com.wysp.social" target="_blank">
            <img src="~/assets/svg/google-play.svg" alt="Google Play" class="w-1/1">
          </a>
          <a href="https://apps.apple.com/us/app/wysp-social/id1530000000" target="_blank">
            <img src="~/assets/svg/app-store.svg" alt="App Store" class="w-1/1">
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
.introduction {
  color: #fff;
  display: flex;
  border-bottom: 4px solid black;
  height:70vh;
}
.introduction .i-section {
  width:50%;
  padding:90px;
}
.introduction .i-section:nth-child(1) h1{
  /* Vertically align in center realtively to the other i-section content*/
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.introduction .i-section:nth-child(2) p{
  /* Vertically align in center realtively to the other i-section content*/
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.introduction .i-section:nth-child(1) {
  border-right: 4px solid black;
  position: relative;
}
.introduction .i-section:nth-child(1) img {
  position: absolute;
  width: 40%;
  left: 0;
  top: 0;
}
</style>