<template>
    <div id="app">
        <b-collapse id="collapse-navbar" v-model="navbarVisible">
            <TheNavbar/>
        </b-collapse>
        <TheHeader v-on:navigationVisibilityChange="toggleNavbar"/>
        <router-view id="main-view"/>
        <TheFooter/>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';

export default {
    name: 'app',
    components: {
        TheNavbar,
        TheFooter,
        TheHeader
    },
    data() {
        return {
            navbarVisible: false
        }
    },
    methods: {
        toggleNavbar(headerLinksVisible) { // eslint-disable-line no-unused-vars
            if ((headerLinksVisible && this.navbarVisible) || (!headerLinksVisible && !this.navbarVisible)) {
                this.$root.$emit('bv::toggle::collapse', 'collapse-navbar');
            }
        }
    }
};
</script>

<style lang="scss">
@import './theme.scss';

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

h1, h2, h3 {
    text-transform: uppercase;
    font-weight: 700;
}

h4, h5, h6 {
    font-weight: 700;
}

#collapse-navbar {
    top: 0;
    position: sticky;
    z-index: 1;
}

#main-view {
    margin: 20px;
    flex: 1;
}
</style>