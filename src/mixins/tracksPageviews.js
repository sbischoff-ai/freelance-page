export default {
    mounted() {
        this.$gtag.pageview({
            page_title: this.$route.name, 
            page_path: this.$route.path,
            page_location: location.href
        });
    }
};
