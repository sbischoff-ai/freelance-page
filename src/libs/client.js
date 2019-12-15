import axios from 'axios';

const url = process.env['VUE_APP_BACKEND_URL'] || 'http://127.0.0.1:8081';

export default {
    async getTest() {
        return axios.get(url + '/test').then(response => response.data.data);
    },
    async getLegalNotice(locale) {
        return axios.get(url + '/legalNotice/' + locale).then(response => response.data.data);
    },
    async getDataPrivacyStatement(locale) {
        return axios.get(url + '/dataPrivacyStatement/' + locale).then(response => response.data.data);
    },
    async submitContactForm(formData) {
        return axios.post(url + '/submitContactForm', formData);
    }
};
