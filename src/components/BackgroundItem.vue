<template>
    <b-badge :id="data.degree" variant="primary" class="text-wrap">
        <div class="m-1">
        {{ data.degree }}<br>
        <i>{{ data.institution }}</i></div>
        <b-tooltip :target="data.degree" triggers="hover" variant="primary" custom-class="background-tooltip">
            <p v-html="data.description"></p>
        </b-tooltip>
    </b-badge>
</template>

<script>
export default {
    name: 'BackgroundItem',
    props: {
        data: {
            degree: String,
            institution: String,
            description: String
        }
    }
}
</script>

<style lang="scss">
.background-tooltip {
    .tooltip-inner{
        width: 30em;
        max-width: 90vw;
    }
}
</style>