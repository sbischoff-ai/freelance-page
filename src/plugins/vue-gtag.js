import Vue from 'vue';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
    config: {
        id: 'UA-154731008-1',
        params: {
            send_page_view: false
        }
    }
});
