<template>
    <b-container fluid class="p-0 mb-4">
        <b-row no-gutters align-v="center">
            <b-col
                sm="4"
                v-if="image && !(imageWideOnly && $breakpoint.xs)"
                :order="imagePosition === 'left' || $breakpoint.xs ? 1 : 12"
            >
                <div class="content-image-area">
                    <img class="content-image" :src="require(`../assets/${image}`)">
                </div>
            </b-col>
            <b-col :sm="image ? 8 : 12" order="2"><slot class="text-justify"></slot></b-col>
        </b-row>
    </b-container>
</template>

<script>
import breakpoint from '../mixins/breakpoint';

export default {
    name: 'ContentParagraph',
    mixins: [breakpoint],
    props: {
        image: String,
        imagePosition: String,
        imageWideOnly: Boolean
    }
};
</script>

<style>
.content-image-area {
    margin: 1em;
}
.content-image {
    max-width: 100%;
    height: auto;
}
</style>
