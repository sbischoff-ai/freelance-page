<i18n>
{
    "en": {
        "wip": "Detailed descriptions for my services are following soon!"
    },
    "de": {
        "wip": "Detaillierte Beschreibungen meiner Dienstleistungsangebote folgen bald!"
    }
}
</i18n>

<template>
    <div class="catalog">
        <b-container>
            <b-row align-h="around">
                <b-col md="6" lg="3" v-for="service in services" :key="service.title" style="height: 21rem;">
                    <ServiceCard
                        v-b-modal.wip-modal
                        v-bind:title="service.title"
                        v-bind:image="service.image"
                        style="height: 90%; margin: auto;"
                    />
                </b-col>
            </b-row>
        </b-container>
        <b-modal id="wip-modal" ok-only centered hide-header>
            {{ $t('wip' )}}
        </b-modal>
    </div>
</template>

<script>
import ServiceCard from './ServiceCard';

export default {
    name: 'ServiceCatalog',
    components: {
        ServiceCard
    },
    props: {
        services: Array
    }
};
</script>

<style>
.catalog {
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
</style>