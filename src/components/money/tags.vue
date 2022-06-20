<template>
  <div class="tags">
    <div>
      <button>新增标签</button>
    </div>
    <ol class="tag">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ol>
  </div>
</template>

<script lang="ts">
export default {
  name: 'tags'
};
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
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 8px;
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