<template>
  <div>
    <ol class="toggle">
      <li :class="value==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="value==='+' && 'selected'" @click="selectType('+')">收入</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Toggle extends Vue {
  @Prop() readonly value!: string;

  selectType(sign: string) {
    if (sign !== '-' && sign !== '+') {
      throw new Error('sign is unknown');
    }
    return this.$emit('update:value', sign);
  }
}
</script>

<style lang="scss" scoped>
.toggle {
  background: #c4c4c4;
  display: flex;
  font-size: 24px;

  > li {
    width: 50%;
    text-align: center;
    margin: 14px 0;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: -14px;
      left: 0;
      width: 100%;
      border-bottom: 4px solid;
      background: #333;
    }
  }
}
</style>