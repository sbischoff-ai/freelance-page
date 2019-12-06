<template>
    <b-card
        :title="title"
        :img-src="require(`../assets/${image}`)"
        img-alt="Image"
        img-top
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-button href="#" variant="primary">Details</b-button>
    </b-card>
</template>

<script>
export default {
    name: "Service Card",
    props: {
        title: String,
        image: String
    }
}
</script>

<style>

</style>