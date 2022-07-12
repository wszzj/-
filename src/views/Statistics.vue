<template>
  <Layout>
    <tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <span>
      type:{{ type }}
      <hr>
      interval:{{ interval }}
    </span>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';
import intervalList from '@/constants/intervalList';

@Component({
  components: {Tabs,}
})

export default class Statistics extends Vue {

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>