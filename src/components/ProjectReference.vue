<i18n>
{
    "en": {
        "position": "Position",
        "tasks": "Tasks"
    },
    "de": {
        "position": "Position",
        "tasks": "Aufgaben"
    }
}
</i18n>

<template>
    <div class="mb-3">
        <div role="tab" class="p-1 mb-1">
            <b-link
                v-b-toggle="projectKey"
                class="project-card-header"
            >
                <font-awesome-icon icon="caret-right" class="project-card-caret mr-2"/>
                <b class="project-card-title">{{ project.title }}</b>
            </b-link>
        </div>
        <b-collapse :id="projectKey" accordion="projects-accordion" role="tabpanel" class="ml-3">
            <div class="project-position"><b>{{ $t('position') }}:</b> <i>{{ project.position }}</i></div>
            <div v-html="project.description" class="mb-1"></div>
            <b>{{ $t('tasks') }}:</b>
            <ul>
                <li v-for="(task, idx) in project.tasks" :key="idx">{{ task }}</li>
            </ul>
            <hr>
            <b-badge v-for="(keyword, idx) in project.keywords" :key="idx" variant="secondary" class="m-1">
                {{ keyword }}
            </b-badge>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: 'ProjectReference',
    props: {
        projectKey: String,
        project: {
            title: String,
            description: String,
            position: String,
            tasks: Array,
            keywords: Array
        }
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
    color: $gray-700;
}

.project-card-header {
    text-align: start;
    margin: 5px;
    color: $blue;
}

.project-card-header:hover {
    color: $gray-600;
    text-decoration: none;
}

:not(.collapsed) > .project-card-title {
    color: $gray-700;
}

.project-position {
    margin-bottom: 5px;
}
</style>