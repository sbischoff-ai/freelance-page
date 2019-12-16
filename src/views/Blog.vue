<i18n>
{
    "en": {
        "wip": "The Blog section is still under development."
    },
    "de": {
        "wip": "Der Blog-Bereich befindet sich noch in der Entwicklung."
    }
}
</i18n>

<template>
    <div id="blog" class="wip">
        {{ $t('wip') }}<br><br>
        <b-spinner type="grow" variant="primary"/>
    </div>
</template>

<script>
export default {
    name: 'Blog'
};
</script>

<style lang="scss">
@import '../theme.scss';

.wip {
    padding-top: 30vh;
    font-weight: 500;
    font-size: larger;
    color: $blue;
}
</style>