<template>
    <b-container fluid class="p-0">
        <b-row no-gutters>
            <b-col cols="4" v-if="image" :order="imagePosition === 'left' ? 1 : 12">
                <img class="content-image" :src="require(`../assets/${image}`)">
            </b-col>
            <b-col cols="8" order="2"><slot class="text-justify"></slot></b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'ContentParagraph',
    props: {
        image: String,
        imagePosition: String
    }
};
</script>

<style>
.content-image {
    margin: 1em;
    max-width: 100%;
    max-height: 100%
}
</style>
