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
        client.getLegalNotice(this.$root.$i18n.locale).then(html => {
            this.legalnoticeHtml = html;
        });
    }
};
</script>

<style>

</style>