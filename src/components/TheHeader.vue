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
    <div id="header">
        <picture>
            <source media="(min-width: 100vh)" srcset="../assets/logo_dark.png">
            <source srcset="../assets/logo_dark_small.png">
            <img src="../assets/logo_dark.png" alt="Logo" class="header-logo" v-b-visible="emitVisibilityEvent">
        </picture>
        <b-container>
            <b-row class="justify-content-md-center">
                <b-col sm="auto">
                    <b-link class="header-link" to="/aboutme#main-view" @click="scrollTo('#main-view')">
                        {{ $t('aboutme') }}
                    </b-link>
                </b-col>
                <b-col sm="auto">
                    <b-link class="header-link" to="/services#main-view" @click="scrollTo('#main-view')">
                        {{ $t('services') }}
                    </b-link>
                </b-col>
                <b-col sm="auto">
                    <b-link class="header-link" to="/blog#main-view" @click="scrollTo('#main-view')">
                        {{ $t('blog') }}
                    </b-link>
                </b-col>
                <b-col sm="auto">
                    <b-link class="header-link" to="/contact#main-view" @click="scrollTo('#main-view')">
                        {{ $t('contact') }}
                    </b-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    methods: {
        emitVisibilityEvent(linksVisible) {
            this.$emit('navigationVisibilityChange', linksVisible)
        },
        scrollTo: function (hashtag) {
            setTimeout(() => { location.href = hashtag }, 1);
        },
    }
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

#header {
    height: 100vh;
    background-color: $dark
}

.header-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30vh;
    height: auto;
    width: 70%;
}

.header-link {
    font-size: x-large;
    color: $gray-500;
}

.header-link:hover {
    color: $gray-100;
    text-decoration: none;
}
</style>