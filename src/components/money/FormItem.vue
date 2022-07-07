<template>
  <div>
    <label class="Form-wrapper">
      <span class="name">{{ fieldName }}</span>
      <input type="text"
             :value="value"
             @input="onValueChange($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:value', value);
  }
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