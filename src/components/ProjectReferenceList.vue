<template>
    <div role="tablist">
        <ProjectReference
            v-for="(project, idx) in projects"
            :key="idx"
            :projectKey="'project-' + idx"
            :project="project"
        />
    </div>
</template>

<script>
import ProjectReference from './ProjectReference';

export default {
    name: 'ProjectReferenceList',
    components: {
        ProjectReference
    },
    props: {
        projects: Array
    }
};
</script>

<style>

</style>