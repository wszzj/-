import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import icon from '@/components/Icon.vue';
import toggleBar from '@/components/ToggleBar.vue';
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('ToggleBar', toggleBar);
Vue.component('Layout', Layout);
Vue.component('Icon', icon);

window.recordList=recordListModel.fetch();
window.createRecord=(record:RecordItem)=>{
  recordListModel.create(record)
}
window.



window.tagList = tagListModel.fetch();
window.findTag=(id:string)=>{
  return window.tagList.filter(item=>item.id===id)[0]
}
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicate') {
    window.alert('标签重复了');
  } else if (message === 'success') {
    window.alert('标签添加成功');
  }
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
window.updateTag=(id:string,name:string)=>{
  return tagListModel.update(id,name)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
