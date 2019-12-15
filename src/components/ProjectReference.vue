<template>
    <div class="mb-2">
    <!--<b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">-->
        <div role="tab" class="p-1 mb-1">
            <b-link
                v-b-toggle="projectKey"
                class="project-card-button"
            >
                <font-awesome-icon icon="caret-right" class="project-card-caret mr-2"/> <b>{{ title }}</b>
            </b-link>
        </div>
        <!--</b-card-header>-->
        <b-collapse :id="projectKey" accordion="projects-accordion" role="tabpanel">
            <!--<b-card-body>
                <b-card-text>--><slot></slot><!--</b-card-text>
            </b-card-body>-->
        </b-collapse>
    <!--</b-card>-->
    </div>
</template>

<script>
export default {
    name: 'ProjectReference',
    props: {
        projectKey: String,
        title: String
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

.project-card-caret {
    transition-property: transform;
    transition-duration: .4s;
}

:not(.collapsed) > .project-card-caret {
    transform: rotate(90deg);
}

.project-card-button {
    text-align: start;
    margin: 5px;
    color: $gray-700;
}

.project-card-button:hover {
    color: $blue;
    text-decoration: none;
}
</style>