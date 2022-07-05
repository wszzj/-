<template>
  <div>
    <label class="Form-wrapper">
      <span class="name">{{ fieldName }}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop() readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
}
</script>

<style lang="scss" scoped>
.Form-wrapper {
  font-size: 16px;
  display: flex;
  padding-left: 16px;
  align-items: center;

  > .name {
    margin-right: 16px;
  }

  > input {
    margin-top: 10px;
    margin-bottom: 10px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }

}
</style>