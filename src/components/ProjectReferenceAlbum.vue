<template>
    <div class="album">
        <ProjectReferenceCard/>
    </div>
</template>

<script>
import ProjectReferenceCard from './ProjectReferenceCard';

export default {
    name: 'ProjectReferenceAlbum',
    components: {
        ProjectReferenceCard
    }
};
</script>

<style>
.album {
    margin: 10px;
}
</style>