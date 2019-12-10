export default {
    data() {
        return {
            actualHash: '#'
        }
    },
    mounted () {
        setTimeout(() => {
            location.href = this.actualHash;
        }, 1);
    },
    methods: {
        scrollTo: function (hashtag) {
            setTimeout(() => {
                this.actualHash = hashtag;
                if (hashtag === '#') return;
                location.hash = 'freelancer';
            }, 1);
        }
    }
}
