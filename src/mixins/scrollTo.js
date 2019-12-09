export default {
    mounted () {
        if (this.$route.hash) {
            setTimeout(() => this.scrollTo(this.$route.hash), 1);
        }
    },
    methods: {
        scrollTo: function (hashtag) {
            setTimeout(() => { location.href = hashtag }, 1);
        }
    }
}
