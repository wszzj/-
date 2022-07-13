<template>
  <Layout>
    <tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="remark">{{ item.notes }}</span>
            <span>¥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
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
    if (tags === []) {return '无';}
    return tags.map(i => i.name).toString();
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
    if (recordList.length === 0) {return [];}
    const newList = clone(recordList).sort((a, b) =>
      dayjs(b.createdTime).valueOf() - dayjs(a.createdTime).valueOf()
    );
    const result = [{
      title: dayjs(newList[0].createdTime).format('YYYY-MM-DD'),
      items: [newList[0]]
    }];
    for (let i = 0; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(current.createdTime).isSame(dayjs(last.title), 'day')) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(newList[i].createdTime).format('YYYY-MM-DD'),
          items: [current]
        });
      }
    }
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecord');
  }

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
    margin-left: 16px;
    padding-right: 16px;
    color: #999999;

    //overflow: hidden;
    //white-space: nowrap;
    //text-overflow: ellipsis;

  }
}


</style>