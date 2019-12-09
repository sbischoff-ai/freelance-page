import Vue from 'vue';
import './plugins/bootstrap-vue';
import i18n from './plugins/vue-i18n';
import './plugins/fontawesome';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
