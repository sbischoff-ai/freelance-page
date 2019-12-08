<i18n>
{
  "en": {
    "aboutme": "About Me",
    "services": "Services",
    "blog": "Blog",
    "contact": "Contact"
  },
  "de": {
    "aboutme": "Über Mich",
    "services": "Services",
    "blog": "Blog",
    "contact": "Kontakt"
  }
}
</i18n>

<template>
    <div id="navbar">
        <b-navbar toggleable="lg" :sticky="true" type="dark" variant="dark">
            <b-navbar-brand href="#/">
                <img src="../assets/logo_dark.png" height="27" alt="Logo">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#/aboutme">{{ $t('aboutme') }}</b-nav-item>
                <b-nav-item href="#/services">{{ $t('services') }}</b-nav-item>
                <b-nav-item href="#/blog">{{ $t('blog') }}</b-nav-item>
                <b-nav-item href="#/contact">{{ $t('contact') }}</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
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
export default {
    name: 'TheNavbar',
    methods: {
        changeLocale: function(locale) {
            this.$root.$i18n.locale = locale;
        }
    }
};
</script>

<style>

</style>