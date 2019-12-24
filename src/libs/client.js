import axios from 'axios';

const url = process.env['VUE_APP_BACKEND_URL'] || 'http://127.0.0.1:8081';

export default {
    async getResource(name, locale, type='json') {
        return axios.get(url + '/' +  ['resource', name, locale, type].join('/')).then(response => response.data.data);
    },
    async submitContactForm(formData) {
        return axios.post(url + '/submitContactForm', formData);
    }
};
