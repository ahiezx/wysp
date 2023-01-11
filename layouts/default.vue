<template>
    <div class="default">
      <MainHeader />
      <slot />
      <MainFooter />
    </div>
</template>

<style>
/* import Garet-Book.ttf from ~/assets/fonts */
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
* {
  box-sizing: border-box;
}
.default {
  font-family: 'Garet-Heavy';
}
body {
  background-color: #FAFAFA;
}
</style>