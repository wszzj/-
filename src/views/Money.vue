<template>
  <Layout class-prefix="layout">
    {{ record }}
    <key-pad @update:value="onUpdateAmount"/>
    <toggle :value.sync="record.toggle"/>
    <notes @update:value="onUpdateNotes"/>
    <tags :data-source.sync='tags' @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import KeyPad from '@/components/money/KeyPad.vue';
import Toggle from '@/components/money/Toggle.vue';
import Remark from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';


type Recode = {
  tags: string[]
  notes: string
  toggle: string
  amount: number
}
@Component({
  components: {Notes, Tags, Toggle, KeyPad}
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  record: Recode = {
    tags: [], notes: '123', toggle: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    return this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    return this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    return this.record.amount = parseFloat(value);
  }
}

</script>

<style lang="scss" scoped>
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";


</style>