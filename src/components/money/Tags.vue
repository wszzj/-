<template>
  <div class="tags">
    <div>
      <button @click="create">新增标签</button>
    </div>
    <ol class="tag">
      <li v-for="tag in dataSource" :key="tag" :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="toggleTags(tag)">{{ tag }}
      </li>

    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  @Prop() readonly value!: string[];
  selectTags = this.value;

  toggleTags(tag: string) {
    const index = this.selectTags.indexOf(tag);
    if (index >= 0) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tag);
    }
    this.$emit('update:value', this.selectTags);
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      window.alert('标签名不能为空');
    } else {
      if (this.dataSource)
        this.$emit('update:dataSource', [...this.dataSource, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .tag {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: rgb(217, 217, 217);
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 8px;

      &.selected {
        background: darken(rgb(217, 217, 217), 50%);
        color: #ffffff;
      }
    }

  }

  > div > button {
    margin-top: 16px;
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding-left: 4px;
    padding-right: 4px;
  }
}
</style>