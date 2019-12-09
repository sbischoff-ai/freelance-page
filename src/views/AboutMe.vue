<i18n>
{
    "en": {
        "title": "About Me",
        "personalinfo": "Hello, my name is Silas Bischoff. I'm a freelance software developer and data scientist."
    },
    "de": {
        "title": "Über Mich",
        "personalinfo": "Hallo, mein Name ist Silas Bischoff. Ich bin ein freiberuflicher Software-Entwickler und Data Scientist."
    }
}
</i18n>

<template>
    <div id="about-me">
        <ContentArea>
            <ContentTitle icon="address-card">{{ $t('title') }}</ContentTitle>
            <ContentParagraph>{{ $t('personalinfo') }}</ContentParagraph>
            <ContentTitle icon="poll-h">Profil</ContentTitle>
            <ContentParagraph image="undraw_chat_bot.svg" imagePosition="right">
                asdjösadaösdj öask jdösa jöas jdöakjsödkj öaskjd öaskjd öaksjd öalskjd öaslkdj öalksjdöalksjdö laskjd sd
            </ContentParagraph>
            <ContentParagraph image="undraw_online_chat.svg" imagePosition="left">
                Lorem Ipsum wtf.
            </ContentParagraph>
        </ContentArea>
    </div>
</template>

<script>
import ContentTitle from '../components/ContentTitle';
import ContentArea from '../components/ContentArea';
import ContentParagraph from '../components/ContentParagraph';

export default {
    name: 'AboutMe',
    components: {
      ContentTitle,
      ContentArea,
      ContentParagraph
    }
};
</script>

<style>

</style>