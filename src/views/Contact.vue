<i18n>
{
    "en": {
        "contactform": "Contact Form"
    },
    "de": {
        "contactform": "Kontaktformular"
    }
}
</i18n>

<template>
    <div id="contact">
        <ContentArea>
            You can reach me via <b-link href="mailto:contact@sbischoff.dev" class="link">contact@sbischoff.dev</b-link> or use the ...
            <ContentTitle icon="paper-plane">{{ $t('contactform') }}</ContentTitle>
            <ContactForm/>
        </ContentArea>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import ContentArea from '../components/ContentArea';
import ContentTitle from '../components/ContentTitle';

export default {
    name: 'Contact',
    components: {
        ContactForm,
        ContentArea,
        ContentTitle
    }
};
</script>

<style>

</style>