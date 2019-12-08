<i18n>
{
  "en": {
    "title": "About Me"
  },
  "de": {
    "title": "Über Mich"
  }
}
</i18n>

<template>
    <div id="about-me">
        <h1>{{ $t('title') }}</h1>
        <b-container class="text-layout text-justify">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
};
</script>

<style>
.text-layout {
    max-width: 50rem;
}
</style>