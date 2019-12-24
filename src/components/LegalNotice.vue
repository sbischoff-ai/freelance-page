<template>
    <div v-html="legalnoticeHtml"></div>
</template>

<script>
import client from '../libs/client';

export default {
    name: 'LegalNotice',
    data() {
        return {
            legalnoticeHtml: ''
        }
    },
    mounted() {
        client.getResource('legalNotice', this.$root.$i18n.locale, 'html').then(html => {
            this.legalnoticeHtml = html;
        });
    }
};
</script>

<style>

</style>