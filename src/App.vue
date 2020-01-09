<i18n>
{
    "en": {
        "cookiebanner": "This website uses cookies to collect anonymous pageview statistics.",
        "learnmore": "Learn more",
        "cookieaccept": "Accept",
        "cookiedecline": "Decline",
        "dataprivacystatement": "Data Privacy Statement"
    },
    "de": {
        "cookiebanner": "Diese Website verwendet Cookies, um anonyme Statistiken über Seitenzugriffe zu erfassen.",
        "learnmore": "Mehr erfahren",
        "cookieaccept": "Zustimmen",
        "cookiedecline": "Ablehnen",
        "dataprivacystatement": "Datenschutzerklärung"
    }
}
</i18n>

<template>
    <div id="app">
        <b-collapse id="collapse-navbar" v-model="navbarVisible">
            <TheNavbar/>
        </b-collapse>
        <TheHeader v-on:navigationVisibilityChange="toggleNavbar"/>
        <router-view id="main-view"/>
        <TheFooter/>
        <CookieLaw theme="niceblue" v-on:decline="gaOptOut()">
            <div slot-scope="props" style="overflow: auto; width: 100%;">
                <div style="float: left; margin-top: 5px; margin-bottom: 10px;">
                    <span>{{ $t('cookiebanner') }}</span>
                    <b-link v-b-modal.modal-data-privacy class="data-privacy-link">{{ $t('learnmore') }}</b-link>
                </div>
                <div style="float: right;">
                    <b-button variant="success" @click="props.accept" class="mr-3">{{ $t('cookieaccept') }}</b-button>
                    <b-button variant="danger" @click="props.decline">{{ $t('cookiedecline') }}</b-button>
                </div>
            </div>
        </CookieLaw>
    </div>
</template>

<script>
import CookieLaw from './components/CookieLaw';

import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';

export default {
    name: 'app',
    components: {
        TheNavbar,
        TheFooter,
        TheHeader,
        CookieLaw
    },
    data() {
        return {
            navbarVisible: false
        };
    },
    methods: {
        gaOptOut() {
            window['ga-disable-UA-154731008-1'] = true;
        },
        toggleNavbar(collapseCondition) {
            if ((collapseCondition && this.navbarVisible) || (!collapseCondition && !this.navbarVisible)) {
                this.$root.$emit('bv::toggle::collapse', 'collapse-navbar');
            }
        }
    },
    mounted() {
        const recursiveElementLookup = (element, recursions, action) => {
            if (document.getElementById(element)) {
                action();
            } else if (recursions > 0) {
                setTimeout(() => {
                    recursiveElementLookup(element, recursions-1, action)
                }, 1);
            }
        }
        if(location.hash) {
            recursiveElementLookup(location.hash.substring(1), 1000, () => {
                this.$scrollTo(location.hash, 500, { offset: -10 });
            });
        }
    }
};
</script>

<style lang="scss">
@import './theme.scss';

.data-privacy-link {
    white-space: nowrap;
    margin-left: 1em; 
    color: $gray-400;
    font-weight: bold;
}

.data-privacy-link:hover {
    color: $gray-800;
    text-decoration: none;
}

.Cookie--niceblue {
    background-color: $blue;
    color: $gray-100;
    padding: 1rem;
    text-align: left;
    z-index: 1 !important;
}

#app {
    font-family: 'Quicksand', Helvetica, Arial, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $gray-800;
    display: flex;
    min-height: 200vh;
    flex-direction: column;
    background-color: $gray-100;
}


@media screen and (max-width: 570px) {
    #app {
        font-size: smaller;
    }
}

h1, h2, h3 {
    text-transform: uppercase;
    font-weight: 700;
}

h3 {
    font-size: x-large !important;
}

h4, h5, h6 {
    font-weight: 700;
    text-transform: capitalize;
}

.link {
    font-weight: 700;
    color: $blue;
}

.link:hover {
    text-decoration: none;
    color: $gray-600;
}

#collapse-navbar {
    top: 0;
    position: sticky;
    z-index: 2;
}

#main-view {
    margin: 6px;
    flex: 1;
    min-height: 70vh;
}
</style>
