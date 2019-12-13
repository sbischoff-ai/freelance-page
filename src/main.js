import Vue from 'vue';
import router from './plugins/router';
import i18n from './plugins/vue-i18n';
import './plugins/bootstrap-vue';
import './plugins/vue-scrollto';
import './plugins/fontawesome';
import './plugins/google-charts';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
