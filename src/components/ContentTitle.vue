<template>
    <div :class="position === 'right' ? 'content-title position-right' : 'content-title position-left'">
        <h1 style="font-size: xx-large;"><font-awesome-icon
            v-if="position === 'left' || !position" 
            :icon="icon" 
            class="content-title-icon"
        /> <slot></slot> <font-awesome-icon
            v-if="position === 'right'" 
            :icon="icon" 
            class="content-title-icon"
        /></h1>
    </div>
</template>

<script>
export default {
    name: 'ContentTitle',
    props: {
        icon: String,
        position: String
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

.content-title {
    margin-bottom: 2em;
    margin-top: 2em;
}

.position-left {
    text-align: start;
}

.position-right {
    text-align: end;
}

.content-title-icon {
    color: $blue;
}
</style>