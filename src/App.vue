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
        };
    },
    methods: {
        toggleNavbar(collapseCondition) {
            if ((collapseCondition && this.navbarVisible) || (!collapseCondition && !this.navbarVisible)) {
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
