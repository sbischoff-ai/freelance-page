<template>
    <div class="catalog">
        <b-card-group deck>
            <ServiceCard
                v-for="service in services"
                v-bind:key="service.title"
                v-bind:title="service.title"
                v-bind:image="service.image"
            />
        </b-card-group>
    </div>
</template>

<script>
import ServiceCard from './ServiceCard'

export default {
    name: 'ServiceCatalog',
    components: {
        ServiceCard
    },
    props: {
        services: Array
    }
}
</script>

<style>
.catalog {
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
</style>