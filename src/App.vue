<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<style lang="scss">
@import "src/assets/style/helper.scss";
@import "src/assets/style/reset.scss";
body {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  background: #e3e3e3;
}

</style>
