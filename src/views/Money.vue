<template>
  <Layout class-prefix="layout">
    <key-pad :value.sync="record.amount" @submit='saveRecord'/>
    <toggle :value.sync="record.toggle"/>
    <div class="notes">
      <Form-item field-name="备注"
                 placeholder="在这里输入备注"
                 @update:value="OnUpdateNotes"
      />
    </div>
    <tags :data-source.sync='tags' :value.sync="record.tags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import KeyPad from '@/components/money/KeyPad.vue';
import Toggle from '@/components/money/Toggle.vue';
import Remark from '@/components/money/FormItem.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import store from '@/store/index2';

const version = window.localStorage.getItem('version') || '0.0.0';


window.localStorage.setItem('version', '0.0.1');

@Component({
  components: {FormItem, Tags, Toggle, KeyPad}
})
export default class Money extends Vue {
  tags = store.tagList;
  recordList = store.recordList;
  record: RecordItem = {
    tags: [], notes: '', toggle: '-', amount: 0, createdTime: undefined
  };

  OnUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record)
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

.notes {
  padding: 10px 0;
}

</style>