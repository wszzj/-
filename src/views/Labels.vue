<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tagList" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"></Icon>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class='createTag' @click="createTag">添加标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import Button from '@/components/money/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';


@Component({
  components: {Button},
})

export default class Labels extends mixins(TagHelper) {
  get tagList(){
    return this.$store.state.tagList
  }
  beforeCreate(){
    this.$store.commit('fetchTag')
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

.createTag {
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