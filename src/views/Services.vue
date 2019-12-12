<template>
    <div id="services">
        <h1>Consulting Services</h1>
        <ServiceCatalog :services="services"/>
    </div>
</template>

<script>
import ServiceCatalog from '../components/ServiceCatalog';

const services = require('../data/services');

export default {
    name: 'Services',
    components: {
        ServiceCatalog
    },
    data: () => {
        return {
            services
        }
    }
};
</script>

<style>

</style>