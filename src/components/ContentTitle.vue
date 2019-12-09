<template>
    <div class="content-title">
        <font-awesome-icon :icon="icon" class="content-title-icon"/> <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ContentTitle',
    props: {
        icon: String
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

.content-title {
    font-size: xx-large;
    text-align: start;
}

.content-title-icon {
    color: $blue;
}
</style>