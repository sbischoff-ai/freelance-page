<template>
    <b-container class="content-layout text-justify">
        <slot></slot>
    </b-container>
</template>

<script>
export default {
    name: 'ContentArea'
};
</script>

<style>
.content-layout {
    max-width: 50rem !important;
}
</style>
