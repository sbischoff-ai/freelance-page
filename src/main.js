import Vue from 'vue';
import router from './plugins/router';
import i18n from './plugins/vue-i18n';
import './plugins/bootstrap-vue';
import './plugins/vue-scrollto';
import './plugins/fontawesome';
import './plugins/google-charts';
import App from './App.vue';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => { // eslint-disable-line no-unused-vars
  if (i18n.availableLocales.includes(to.params['lang'])) {
    i18n.locale = to.params['lang'];
    next();
  } else if (to.matched.length > 0) {
    location.href = to.fullPath.replace(to.params['lang'], i18n.locale);
  } else {
    next('/');
  }
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
