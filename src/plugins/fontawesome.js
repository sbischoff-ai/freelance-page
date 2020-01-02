import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPollH,
    faAddressCard,
    faTasks,
    faPaperPlane,
    faCheck,
    faPortrait,
    faCaretRight,
    faGraduationCap,
    faLightbulb,
    faChartBar,
    faCode,
    faCogs,
    faRobot
} from '@fortawesome/free-solid-svg-icons';
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
    faPaperPlane,
    faCheck,
    faPortrait,
    faCaretRight,
    faGraduationCap,
    faLightbulb,
    faChartBar,
    faCode,
    faCogs,
    faRobot
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
