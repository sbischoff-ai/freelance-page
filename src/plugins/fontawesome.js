import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPollH, faAddressCard, faTasks, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faXing, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(
    faXing,
    faGithub,
    faTwitter,
    faLinkedin,
    faPollH,
    faAddressCard,
    faTasks,
    faPaperPlane
);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);
