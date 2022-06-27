<template>
  <Layout class-prefix="layout">
    {{ recordList }}
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


type Record = {
  tags: string[]
  notes: string
  toggle: string
  amount: number
  createdTime: Date | undefined
}
@Component({
  components: {Notes, Tags, Toggle, KeyPad}
})
export default class Money extends Vue {
  tags: string[] = ['衣', '食', '住', '行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: Record = {
    tags: [], notes: '', toggle: '-', amount: 0, createdTime: undefined
  };

  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.createdTime=new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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