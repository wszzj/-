<template>
  <Layout class-prefix="layout">
    <key-pad :value.sync="record.amount" @submit='saveRecord'/>
    <tabs :data-source="typeList" :value.sync="record.toggle"/>
    <div class="notes">
      <Form-item field-name="备注"
                 placeholder="在这里输入备注"
                 :value.sync="record.notes"/>
    </div>
    <tags :value.sync="record.tags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import KeyPad from '@/components/money/KeyPad.vue';
import Tags from '@/components/money/Tags.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';


@Component({
  components: {FormItem, Tags, KeyPad, Tabs},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  typeList = typeList;
  record: RecordItem = {
    tags: [], notes: '', toggle: '-', amount: 0, createdTime: undefined
  };

  created() {
    this.$store.commit('fetchRecord');
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请选择至少一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createdRecordError === null) {
      window.alert('已记录');
      this.record.notes = '';
    }
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