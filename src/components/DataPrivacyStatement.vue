<template>
    <div v-html="dataPrivacyStatement"></div>
</template>

<script>
import client from '../libs/client';

export default {
    name: 'DataPrivacyStatement',
    data() {
        return {
            dataPrivacyStatement: ''
        }
    },
    mounted() {
        client.getResource('dataPrivacyStatement', this.$root.$i18n.locale, 'html').then(html => {
            this.dataPrivacyStatement = html;
        });
    }
};
</script>

<style>

</style>