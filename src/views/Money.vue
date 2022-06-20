<template>
  <Layout class-prefix="layout">
    <key-pad/>
    <toggle/>
    <remark/>
    <tags/>
  </Layout>
</template>

<script lang="ts">


import KeyPad from '@/components/money/keyPad.vue';
import Toggle from '@/components/money/toggle.vue';
import Remark from '@/components/money/remark.vue';
import Tags from '@/components/money/tags.vue';

export default {
  name: 'money',
  components: {Tags, Remark, Toggle, KeyPad},


};
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