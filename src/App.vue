<template>
    <div id="app">
        <TheNavbar/>
        <router-view class="view"/>
        <TheFooter/>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
import TheFooter from './components/TheFooter';

export default {
    name: 'app',
    components: {
        TheNavbar,
        TheFooter
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.view {
    margin: 20px;
    flex: 1;
}
</style>
