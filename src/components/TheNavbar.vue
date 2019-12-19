<i18n>
{
  "en": {
    "aboutme": "About Me",
    "services": "Services",
    "blog": "Blog",
    "contact": "Contact"
  },
  "de": {
    "aboutme": "Über mich",
    "services": "Services",
    "blog": "Blog",
    "contact": "Kontakt"
  }
}
</i18n>

<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand :to="'/' + $i18n.locale + '/'" v-scroll-to="'#app'">
                <img src="../assets/logo_dark.png" height="27" alt="Logo">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="text-left">
                <b-nav-item
                    :to="'/' + $i18n.locale + '/aboutme#main-view'"
                    v-scroll-to="{
                        el: '#main-view',
                        offset: $breakpoint.smAndDown ? -270 : -76
                    }"
                >
                    {{ $t('aboutme') }}
                </b-nav-item>
                <b-nav-item
                    :to="'/' + $i18n.locale + '/services#main-view'"
                    v-scroll-to="{
                        el: '#main-view',
                        offset: $breakpoint.smAndDown ? -270 : -76
                    }"
                >
                    {{ $t('services') }}
                </b-nav-item>
                <b-nav-item
                    :to="'/' + $i18n.locale + '/blog#main-view'"
                    v-scroll-to="{
                        el: '#main-view',
                        offset: $breakpoint.smAndDown ? -270 : -76
                    }"
                >
                    {{ $t('blog') }}
                </b-nav-item>
                <b-nav-item
                    :to="'/' + $i18n.locale + '/contact#main-view'"
                    v-scroll-to="{
                        el: '#main-view',
                        offset: $breakpoint.smAndDown ? -270 : -76
                    }"
                >
                    {{ $t('contact') }}
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto text-left">
                <b-nav-item-dropdown :text="$i18n.locale" right>
                    <b-dropdown-item-button @click="changeLocale('en')">en</b-dropdown-item-button>
                    <b-dropdown-item-button @click="changeLocale('de')">de</b-dropdown-item-button>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import breakpoint from '../mixins/breakpoint';

export default {
    name: 'TheNavbar',
    mixins: [breakpoint],
    methods: {
        changeLocale: function(locale) {
            const oldLocale = this.$i18n.locale;
            this.$root.$i18n.locale = locale;
            history.replaceState({}, document.title, location.href.replace(`/${oldLocale}/`, `/${locale}/`));
            this.$root.$emit('localeChange', locale);
        }
    }
};
</script>

<style>

</style>