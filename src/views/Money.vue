<template>
  <Layout class-prefix="layout">
    {{ recordList.amount }}
    <key-pad :value.sync="record.amount" @submit='saveRecord'/>
    <tabs :data-source="typeList" :value.sync="record.toggle"/>
    <div class="notes">
      <Form-item field-name="备注"
                 placeholder="在这里输入备注"
                 @update:value="OnUpdateNotes"/>
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
  computed: {
    recordList() {
      return this.$store.state.recordList;
    }
  }
})
export default class Money extends Vue {


  typeList = typeList;
  record: RecordItem = {
    tags: [], notes: '', toggle: '-', amount: 0, createdTime: undefined
  };
  created(){
    this.$store.commit('fetchRecord')
  }
  OnUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord');
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