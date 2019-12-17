<i18n>
{
    "en": {
        "contactform": "Contact Form",
        "contactdetails": "Contact Details",
        "phone": "Phone"
    },
    "de": {
        "contactform": "Kontaktformular",
        "contactdetails": "Kontaktdaten",
        "phone": "Telefon"
    }
}
</i18n>

<template>
    <div id="contact">
        <ContentArea>
            <ContentTitle icon="paper-plane">{{ $t('contactform') }}</ContentTitle>
            <ContentParagraph><ContactForm/></ContentParagraph>
            <ContentTitle icon="address-card">{{ $t('contactdetails') }}</ContentTitle>
            <ContentParagraph image="undraw_address.svg" imageWideOnly>
            Silas Bischoff<br>
            Tonhallenstr. 21<br>
            47051 Duisburg<hr>
            {{$t('phone')}}: <b-link href="tel:+491744744708" class="link">+49 (0) 1744 744 708</b-link><br>
            E-Mail: <b-link href="mailto:contact@sbischoff.dev" class="link">contact@sbischoff.dev</b-link>
            </ContentParagraph>
        </ContentArea>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import ContentArea from '../components/ContentArea';
import ContentTitle from '../components/ContentTitle';
import ContentParagraph from '../components/ContentParagraph';

export default {
    name: 'Contact',
    components: {
        ContactForm,
        ContentArea,
        ContentTitle,
        ContentParagraph
    },
    mounted() {
        if (location.hash === '#' || !location.hash){
            this.hash = '#main-view';
            this.$scrollTo('#main-view', 500, { offset: -10 });
        }
    }
};
</script>

<style>

</style>