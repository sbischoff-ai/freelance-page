<template>
    <b-card class="service-card">
        <div class="service-card-header">
            <img :src="require(`../assets/${image}`)" class="service-card-image">
        </div>
        <b-card-title>{{ title }}</b-card-title>
    </b-card>
</template>

<script>
export default {
    name: "ServiceCard",
    props: {
        title: String,
        image: String
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

.service-card {
    max-width: 20rem;
    min-width: 15rem;
    background-color: $white;
    transition: all .1s ease-in-out;
}

.service-card:hover {
    transform: scale(1.1);
}

.service-card-header {
    height: 15rem;
    margin: 2px;
}

.service-card-image {
    max-width: 100%;
    height: auto;
}
</style>