<template>
  <div>
    <label class="notes">
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
  @Prop({required:true}) fieldName!:string
  @Prop() placeholder?:string
}
</script>

<style lang="scss" scoped>
.notes {
  background: rgb(245, 245, 245);
  font-size: 14px;
  display: flex;
  padding-left: 16px;
  align-items: center;

  > .name {
    margin-right: 16px;
  }

  > input {
    margin-top: 24px;
    margin-bottom: 24px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }

}
</style>