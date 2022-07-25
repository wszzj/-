<template>
  <Layout>
    <tabs class-prefix="type" :data-source="typeList" :value.sync="toggle"/>
<!--    <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>-->
    <ol v-if="groupList.length>0">
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}
          <span>¥{{ group.total }}</span>
        </h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="remark">{{ item.notes }}</span>
            <span>¥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">
      目前没有相关记录
    </div>
  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';
import intervalList from '@/constants/intervalList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs,}
})

export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    if (tags.length === 0) {return '无';}
    return tags.map(i => i.name).join('，');
  }

  beautify(string: string) {
    const now = dayjs();
    const day = dayjs(string);
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }


  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupList() {
    const {recordList} = this;
    const newList = clone(recordList)
      .filter(i => i.toggle === this.toggle)
      .sort((a, b) => dayjs(b.createdTime).valueOf() - dayjs(a.createdTime).valueOf()
      );
    if (newList.length === 0) {return [];}
    type resultList = [{ title: string, total?: number, items: RecordItem[] }]
    const result: resultList = [{
      title: dayjs(newList[0].createdTime).format('YYYY-MM-DD'),
      items: [newList[0]]
    }];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(current.createdTime).isSame(dayjs(last.title), 'day')) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(newList[i].createdTime).format('YYYY-MM-DD'),
          items: [current]});
      }
    }
    result.map(
      group => {group.total = group.items.reduce((sum, item) => Math.round(sum + item.amount), 0);});
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecord');
  }

  toggle = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = typeList;
}
</script>

<style lang="scss" scoped>
.noResult{
  padding-top: 16px;
  text-align: center;
}
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 48px;
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item

}

li .record {
  @extend %item;
  background: white;

  .remark {
    margin-right: auto;
    margin-left: 32px;
    padding-right: 16px;
    color: #999999;
    overflow: scroll;
    white-space: nowrap;
    transform: translateX(-16px);
  }
}


</style>