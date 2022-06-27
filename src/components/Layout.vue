<template>
  <div class="layout-wrapper">
    <div class="content" :class="'classPrefix' &&`${classPrefix}-content`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout',
  props:['classPrefix'],
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.layout-content {
  display: flex;
  flex-direction: column-reverse;

}
.content {
  overflow: auto;
  flex-grow: 1;
}

</style>