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
        client.getDataPrivacyStatement(this.$root.$i18n.locale).then(html => {
            this.dataPrivacyStatement = html;
        });
    }
};
</script>

<style>

</style>