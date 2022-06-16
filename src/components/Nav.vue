<template>
  <div class="nav">
    <svg>
      <use xlink:href="#label"></use>
    </svg>
    <svg>
      <use xlink:href="#money"></use>
    </svg>
    <svg>
      <use xlink:href="#tongji"></use>
    </svg>
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg';
import y from '@/assets/icons/money.svg';
import z from '@/assets/icons/tongji.svg';

console.log(x);
console.log(y);
console.log(z);
export default {
  name: 'nav',

};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>