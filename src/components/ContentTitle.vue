<template>
    <div :class="position === 'right' ? 'content-title position-right' : 'content-title position-left'">
        <h3><font-awesome-icon
            v-if="position === 'left' || !position" 
            :icon="icon" 
            class="content-title-icon"
        /> <slot></slot> <font-awesome-icon
            v-if="position === 'right'" 
            :icon="icon" 
            class="content-title-icon"
        /></h3>
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
    font-size: xx-large;
    margin-bottom: 1em;
    margin-top: 1em;
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