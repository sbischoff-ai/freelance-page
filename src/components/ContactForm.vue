<i18n>
{
  "en": {
    "name": "Your Name:",
    "email": "Your E-Mail address:",
    "message": "Message:",
    "submit": "Submit",
    "reset": "Reset"
  },
  "de": {
    "name": "Ihr Name:",
    "email": "Ihre E-Mail-Adresse:",
    "message": "Nachricht:",
    "submit": "Absenden",
    "reset": "Zurücksetzen"
  }
}
</i18n>

<template>
    <b-form @submit="onSubmit" @reset="onReset" class="contact-form" v-if="show">
        <b-form-group :label="$t('name')" label-for="input-name">
            <b-form-input id="input-name" v-model="form.name" required></b-form-input>
        </b-form-group>
        <b-form-group :label="$t('email')" label-for="input-name">
            <b-form-input id="input-email" type="email" v-model="form.email" required></b-form-input>
        </b-form-group>
        <b-form-group :label="$t('message')" label-for="input-message">
            <b-form-textarea id="input-message" v-model="form.message" rows="6" required></b-form-textarea>
        </b-form-group>
        <b-button type="reset" variant="secondary" style="float: left;">{{ $t('reset') }}</b-button>
        <b-button type="submit" variant="primary" style="float: right;">{{ $t('submit') }}</b-button>
    </b-form>
</template>

<script>
import client from '../libs/client';

export default {
    name: 'ContactForm',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            show: true
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            client.submitContactForm(this.form);
        },
        onReset(event) {
            event.preventDefault();
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            this.show = false;
            // Reset form validation workaround
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
};
</script>

<style>
.contact-form {
    text-align: start;
}
</style>