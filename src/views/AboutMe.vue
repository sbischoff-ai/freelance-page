<i18n>
{
    "en": {
        "person": "Person",
        "personalinfo": "Hello, my name is Silas Bischoff. I'm a freelance software developer and data scientist. The things I could do for you include, for example: <ul><li>A professional analysis of your business segments or customer base,</li> <li>the complete development of a data-driven application from conception to integration,</li> <li>or simply full-stack support as a member of your development team.</li></ul>",
        "personalinfo2": "",
        "profile": "Profile",
        "languages": "Programming Languages",
        "technologies": "Technologies",
        "frameworks": "Frameworks",
        "methods": "Methods",
        "references": "References"
    },
    "de": {
        "person": "Person",
        "personalinfo": "Hallo, mein Name ist Silas Bischoff. Ich bin ein freiberuflicher Softwareentwickler und Data Scientist. Die Dinge, die ich für Sie tun könnte, beinhalten beispielsweise: <ul><li>Eine professionelle Analyse Ihrer Geschäftsfelder oder Ihres Kundenstammes,</li> <li>die vollständige Entwicklung einer datengetriebenen Anwendung von Konzeption bis Intgration,</li> <li>oder einfach Full-Stack-Unterstützung als Mitglied Ihres Entwicklungsteams.</li></ul>",
        "personalinfo2": "",
        "profile": "Profil",
        "languages": "Programmiersprachen",
        "technologies": "Technologien",
        "frameworks": "Frameworks",
        "methods": "Methoden",
        "references": "Referenzen"
    }
}
</i18n>

<template>
    <div id="about-me">
        <ContentArea>
            <ContentTitle icon="portrait">{{ $t('person') }}</ContentTitle>
            <ContentParagraph image="potrait.png" imagePosition="right">
                <p v-html="$t('personalinfo')"></p> 
            </ContentParagraph>
            <ContentTitle icon="poll-h">{{ $t('profile') }}</ContentTitle>
            Skills and experience ... {{ test }}
            <b-link href="https://www.google.de" class="link">This is a link</b-link>
            <ContentParagraph image="undraw_hacker_mind.svg" imagePosition="left">
                <SkillChart
                    :title="$t('languages')"
                    :data="profile.languages"
                />
            </ContentParagraph>
            <ContentParagraph image="undraw_version_control.svg" imagePosition="right" imageWideOnly>
                <SkillChart
                    :title="$t('technologies')"
                    :data="profile.technologies"
                />
            </ContentParagraph>
            <ContentParagraph image="undraw_JavaScript_frameworks.svg" imagePosition="left">
                <SkillChart
                    :title="$t('frameworks')"
                    :data="profile.frameworks"
                />
            </ContentParagraph>
            <ContentParagraph image="undraw_programming.svg" imagePosition="right" imageWideOnly>
                <SkillChart
                    :title="$t('methods')"
                    :data="profile.methods"
                />
            </ContentParagraph>
            <ContentTitle icon="tasks">{{ $t('references') }}</ContentTitle>
            Previous projects ...
        </ContentArea>
    </div>
</template>

<script>
import ContentTitle from '../components/ContentTitle';
import ContentArea from '../components/ContentArea';
import ContentParagraph from '../components/ContentParagraph';
import SkillChart from '../components/SkillChart';
import profile from '../data/profile';

import client from '../libs/client';

export default {
    name: 'AboutMe',
    components: {
      ContentTitle,
      ContentArea,
      ContentParagraph,
      SkillChart
    },
    data() {
        return {
            profile,
            test: ''
        };
    },
    mounted() {
        client.getTest().then(data => {this.test = data.text;});
    }
};
</script>

<style>

</style>