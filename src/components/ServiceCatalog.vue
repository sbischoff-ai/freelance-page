<template>
    <div class="catalog">
        <b-container>
            <b-row>
                <b-col v-for="service in services" :key="service.title" style="height: 21rem;">
                    <ServiceCard
                        v-bind:title="service.title"
                        v-bind:image="service.image"
                        style="height: 90%;"
                    />
                </b-col>
            </b-row>
        </b-container>
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