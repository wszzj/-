import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import icon from '@/components/Icon.vue';
import toggleBar from '@/components/ToggleBar.vue';


Vue.config.productionTip = false;
Vue.component('ToggleBar', toggleBar);
Vue.component('Layout', Layout);
Vue.component('Icon', icon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};

if(document.documentElement.clientWidth>500){
  window.alert('请使用手机体验本页面')
  const img=document.createElement('img')
  img.src='./QRcode.png'
  img.style.position='fixed'
  img.style.left='50%'
  img.style.top='50%'
  img.style.transform='translate(-50%,-50%)'
  document.body.appendChild(img)
}

