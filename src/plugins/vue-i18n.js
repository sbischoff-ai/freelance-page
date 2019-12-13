import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const defaultLocale =
  navigator.language.includes('de') ?
  'de' :
  'en';

export default new VueI18n({
    locale: defaultLocale,
    messages: {
      en: {}
    }
});
