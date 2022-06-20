<template>
  <div>
    <label class="remark">
      <span class="name">备注</span>
      <input type="text" placeholder="在此输入备注">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'remark'
};
</script>

<style lang="scss" scoped>
.remark {
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