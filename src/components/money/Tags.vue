<template>
  <div class="tags">
    <div>
      <button @click="createTag">新增标签</button>
    </div>
    <ol class="tag">
      <li v-for="tag in tags" :key="tag.id"
          :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="toggleTags(tag)">{{ tag.name }}
      </li>

    </ol>
  </div>
</template>

<script lang="ts">
import TagHelper from '@/mixins/TagHelper';
import {mixins} from 'vue-class-component';
import {Component} from 'vue-property-decorator';

@Component({
})
export default class Tags extends mixins(TagHelper) {
  get tags(){
    return this.$store.state.tagList;
  }
  selectTags: string[] = [];

  created() {
    this.$store.commit('fetchTag');
  }

  toggleTags(tag: string) {
    const index = this.selectTags.indexOf(tag);
    if (index >= 0) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tag);
    }
    this.$emit('update:value', this.selectTags);
  }

}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
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