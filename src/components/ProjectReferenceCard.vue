<template>
    <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="info">{{ title }}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-text><slot></slot></b-card-text>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script>
export default {
    name: 'ProjectReferenceCard',
    props: {
        title: String,
        image: String
    }
};
</script>

<style>

</style>