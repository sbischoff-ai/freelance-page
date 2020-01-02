<template>
    <b-badge
        :id="data.degree"
        :variant="tooltipVisible ? 'dark' : 'primary'"
        class="text-wrap"
    >
        <div class="m-1">
        {{ data.degree }}<br>
        <i>{{ data.institution }}</i></div>
        <b-tooltip
            :target="data.degree"
            triggers="hover"
            variant="dark"
            custom-class="background-tooltip"
            :show.sync="tooltipVisible"
        >
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
    },
    data() {
        return {
            tooltipVisible: false
        }
    }
}
</script>

<style lang="scss">
.background-tooltip {
    z-index: 1 !important;
    .tooltip-inner{
        width: 25em;
        max-width: 90vw;
    }
}
</style>