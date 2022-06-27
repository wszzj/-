<template>
  <Layout class-prefix="layout">
    {{record}}
    <key-pad :value.sync="record.amount"/>
    <toggle :value.sync="record.toggle"/>
    <notes :value.sync="record.notes"/>
    <tags :data-source.sync='tags' :value.sync="record.tags"/>
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
    tags: [], notes: '', toggle: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    return this.record.tags = value;
  }
}

</script>

<style lang="scss" scoped>
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";


</style>