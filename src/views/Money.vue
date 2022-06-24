<template>
  <Layout class-prefix="layout">
    {{ record }}
    <key-pad @update:value="onUpdateAmount"/>
    <toggle :value="record.toggle" @update:value="onUpdateType"/>
    <remark @updata:value="onUpdateRemark"/>
    <tags :data-source.sync='tags' @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import KeyPad from '@/components/money/keyPad.vue';
import Toggle from '@/components/money/toggle.vue';
import Remark from '@/components/money/remark.vue';
import Tags from '@/components/money/tags.vue';
import {Component} from 'vue-property-decorator';


type Recode = {
  tags: string[]
  remark: string
  toggle: string
  amount: number
}
@Component({
  components: {Tags, Remark, Toggle, KeyPad}
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  record: Recode = {
    tags: [], remark: '', toggle: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateRemark(value: string) {
    this.record.remark = value;
  }

  onUpdateType(value: string) {
    this.record.toggle = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}

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


</style>