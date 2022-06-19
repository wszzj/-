<template>
  <Layout class-prefix="layout">
    <div class="keyPad">
      <div class="output">100</div>
      <div class="buttons clearFix">
        <button>C</button>
        <button>÷</button>
        <button>X</button>
        <button>清除</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button class="ok">=</button>
        <button>%</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
    <div>
      <ol class="toggle">
        <li>支出</li>
        <li>收入</li>
      </ol>
    </div>
    <div>
      <label class="remark">
        <span class="name">备注</span>
        <input type="text" placeholder="在此输入备注">
      </label>
    </div>
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
  </Layout>
</template>

<script lang="ts">


export default {
  name: 'money',

};
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column-reverse;

}
</style>
<style lang="scss" scoped>
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";

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
      border: 4px solid;
      background: #333;
    }
  }
}

.keyPad {


  > .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    text-align: right;
    padding: 8px 16px;

  }

  > .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      $h: 64px;
      height: $h;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: $h*2;
        float: right;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 2*4%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: darken($bg, 3*4%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(14), &:nth-child(17) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(12), &:nth-child(15), &:nth-child(18) {
        background: darken($bg, 5*4%);
      }

      &:nth-child(19) {
        background: darken($bg, 6*4%);
      }

      &:nth-child(16) {
        background: darken($bg, 7*4%);
      }
    }

  }
}
</style>