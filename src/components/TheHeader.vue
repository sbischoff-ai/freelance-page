<template>
    <div id="header">
        <img src="../assets/logo_dark.png" alt="Logo" class="header-logo">
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
    margin-top: 20%;
    height: auto;
    width: auto;
    max-width: 100%;
}
</style>