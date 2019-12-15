<i18n>
{
  "en": {
    "name": "Name:",
    "email": "E-Mail:",
    "message": "Message:",
    "privacy": "I agree that my data may be used to process my request.",
    "submit": "Submit Message",
    "error": "An error occured.",
    "dataprivacystatement": "Data Privacy Statement"
  },
  "de": {
    "name": "Name:",
    "email": "E-Mail:",
    "message": "Nachricht:",
    "privacy": "Ich erkläre mich damit einverstanden, dass meine Daten zur Bearbeitung meines Anliegens verwendet werden.",
    "submit": "Nachricht Absenden",
    "error": "Es ist ein Fehler aufgetreten.",
    "dataprivacystatement": "Datenschutzerklärung"
  }
}
</i18n>

<template>
    <b-form @submit="onSubmit" @reset="onReset" class="contact-form" v-if="show">
        <b-form-group :label="$t('name')" label-for="input-name">
            <b-form-input
                id="input-name"
                v-model="form.name"
                :disabled="isSending"
                required
            />
        </b-form-group>
        <b-form-group :label="$t('email')" label-for="input-name">
            <b-form-input
                id="input-email"
                type="email"
                v-model="form.email"
                :disabled="isSending"
                required
            />
        </b-form-group>
        <b-form-group :label="$t('message')" label-for="input-message">
            <b-form-textarea
                id="input-message"
                v-model="form.message"
                rows="6"
                :disabled="isSending"
                required
            />
        </b-form-group>
        <b-form-group>
            <b-form-checkbox
                v-model="privacyAgreement"
                name="privacyAgreement"
                value="accepted"
                unchecked-value="not_accepted"
                :state="privacyAgreement === 'accepted' ? true : false"
                required
            >
                <small>{{ $t('privacy') }} (<b-link v-b-modal.modal-data-privacy class="link">{{ $t('dataprivacystatement') }}</b-link>)</small>
            </b-form-checkbox>
        </b-form-group>
        <b-button
            type="submit"
            :disabled="isSending"
            :variant="submitSuccess ? 'success' : submitFail ? 'danger' : 'primary'"
            class="submit-button"
        >
            <span v-if="!isSending && !submitSuccess && !submitFail">{{ $t('submit') }}</span>
            <b-spinner v-if="isSending" small/>
            <font-awesome-icon icon="check" v-if="submitSuccess"/>
            <span v-if="submitFail">{{ $t('error') }}</span>
        </b-button>
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
            privacyAgreement: 'not-accepted',
            show: true,
            isSending: false,
            submitSuccess: false,
            submitFail: false
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            const promise = client.submitContactForm(this.form);
            this.isSending = true;
            promise.then(response => {
                if (response.status === 204) {
                    this.onReset(event);
                    this.isSending = false;
                    this.submitSuccess = true;
                    setTimeout(() => { this.submitSuccess = false; }, 2000);
                } else throw 'error';
            }).catch(() => {
                this.isSending = false;
                this.submitFail = true;
                setTimeout(() => { this.submitFail = false; }, 3000);
            });
        },
        onReset(event) {
            event.preventDefault();
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            this.submitSuccess = false;
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

.submit-button {
    float: right;
    width: 100%;
    text-align: center;
}
</style>