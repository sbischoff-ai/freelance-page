<template>
    <div id="services">
        <h1>Consulting Services</h1>
        <ServiceCatalog :services="services"/>
    </div>
</template>

<script>
import ServiceCatalog from '../components/ServiceCatalog';

import tracksPageviews from '../mixins/tracksPageviews';

const services = require('../data/services');

export default {
    name: 'Services',
    mixins: [tracksPageviews],
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