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
            <img src="../assets/logo_dark.png" alt="Logo" class="header-logo">
        </picture>
        <b-container id="header-middle" v-b-visible="emitVisibilityEvent">
            <b-row>
                <b-col>
                    <div class="header-subtitle">
                        <p>Coder<span>.</span></p>
                        <p>Consultant<span>.</span></p>
                        <p>Data Scientist<span>.</span></p>
                    </div>
                </b-col>
                <b-col>
                </b-col>
            </b-row>
        </b-container>
        <b-container id="header-navigation">
            <b-row>
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
import scrollTo from '../mixins/scrollTo';

export default {
    name: "TheHeader",
    mixins: [scrollTo],
    methods: {
        emitVisibilityEvent(linksVisible) {
            this.$emit('navigationVisibilityChange', linksVisible)
        }
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

#header {
    height: 100vh;
    background-color: $dark
}

.header-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
    height: auto;
    width: 70%;
}

#header-middle {
    margin-top: 2em;
    margin-left: 15%;
    margin-right: 15%;
}

.header-subtitle {
    color: $gray-100;
    text-align: left;
    font-size: xx-large;
    font-family: 'Roboto Mono', 'Consolas', monospace
}

.header-subtitle p {
    margin-top: 0;
    margin-bottom: 0;
}

.header-subtitle span {
    color: $blue;
}

#header-navigation {
    margin-top: 1em;
    margin-left: 15%;
    margin-right: auto;
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