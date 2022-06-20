import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import icon from '@/components/Icon.vue';
import togglebar from '@/components/Togglebar.vue';

Vue.config.productionTip = false
Vue.component('Togglebar',togglebar)
Vue.component('Layout',Layout)
Vue.component('Icon',icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
