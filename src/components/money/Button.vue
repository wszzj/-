<template>
  <button class='button' @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  font-size: 16px;
  padding: 8px 16px;
  background: #767676;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>