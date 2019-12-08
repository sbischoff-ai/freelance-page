<template>
    <div id="header">
        <picture>
            <source media="(min-width: 100vh)" srcset="../assets/logo_dark.png">
            <source srcset="../assets/logo_dark_small.png">
            <img src="../assets/logo_dark.png" alt="Logo" class="header-logo">
        </picture>
    </div>
</template>

<script>
export default {
    name: "TheHeader"
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
</style>