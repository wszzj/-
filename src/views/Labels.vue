<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="addTag-wrapper">
      <Button class='addTag' @click="addTag">添加标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/money/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button}
})

export default class Labels extends Vue {
  tags = store.tagList;

  addTag() {
    const name = window.prompt('请输入标签');
    if (name) {
      store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 20px;
      height: 20px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.addTag {
  font-size: 16px;
  padding: 7px 16px;
  background: #767676;
  color: white;
  border: none;
  border-radius: 4px;

  &-wrapper {
    text-align: center;
    padding-top: 16px;
    margin-top: 44-16px;
  }
}
</style>