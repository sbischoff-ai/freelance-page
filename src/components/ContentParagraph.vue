<template>
    <b-container fluid class="p-0 mb-4">
        <b-row no-gutters>
            <b-col cols="4" v-if="image" :order="imagePosition === 'left' ? 1 : 12">
                <div class="content-image-area">
                    <img class="content-image" :src="require(`../assets/${image}`)">
                </div>
            </b-col>
            <b-col :cols="image ? 8 : 12" order="2"><slot class="text-justify"></slot></b-col>
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
.content-image-area {
    margin: 1em;
}
.content-image {
    max-width: 100%;
    height: auto;
}
</style>
