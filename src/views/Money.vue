<template>
  <Layout class-prefix="layout">
    <key-pad :value.sync="record.amount" @submit='saveRecord'/>
    <toggle :value.sync="record.toggle"/>
    <notes :value.sync="record.notes"/>
    <tags :data-source.sync='tags' :value.sync="record.tags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import KeyPad from '@/components/money/KeyPad.vue';
import Toggle from '@/components/money/Toggle.vue';
import Remark from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import Notes from '@/components/money/Notes.vue';
import {model} from '@/model';

const version = window.localStorage.getItem('version') || '0.0.0';
const recordList = model.fetch();

window.localStorage.setItem('version', '0.0.1');

@Component({
  components: {Notes, Tags, Toggle, KeyPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList = recordList;
  record: RecordItem = {
    tags: [], notes: '', toggle: '-', amount: 0, createdTime: undefined
  };

  saveRecord() {
    const record2 = model.clone(this.record);
    record2.createdTime = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    model.save(this.recordList);
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