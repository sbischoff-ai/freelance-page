<i18n>
{
    "en": {
        "person": "Person",
        "personalinfo": "Hello, my name is Silas Bischoff. I'm a freelance software developer and data scientist. The things I could do for you include, for example: <ul><li>A professional analysis of your business segments or customer base,</li> <li>the complete development of a data-driven application from conception to integration,</li> <li>or simply full-stack support as a member of your development team.</li></ul>",
        "personalinfo2": "My goal is to develop sustainable technological innovations that noticeably improve people's lives and work. With this sense of purpose and responsibility, I also dedicate myself to the requirements of my customers. If you are interested, you can reach me via my contact form or on <a href='https://www.xing.com/profile/Silas_Bischoff' target='_blank' rel='noopener noreferrer' class='link'>Xing</a> and <a href='https://www.linkedin.com/in/sbischoff' target='_blank' rel='noopener noreferrer' class='link'>LinkedIn</a>. Are you a developer? Then have a look at my open source projects on <a href='https://github.com/sbischoff-ai' target='_blank' rel='noopener noreferrer' class='link'>GitHub</a>.",
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
        "personalinfo2": "Mein Ziel ist es, nachhaltige technologische Innovationen zu entwickeln, die Leben und Arbeit von Menschen spürbar verbessern. Mit diesem Ziel- und Verantwortungsbewusstsein widme ich mich auch den Anforderungen meiner Kunden. Bei Interesse erreichen Sie mich über mein Kontaktformular oder auf <a href='https://www.xing.com/profile/Silas_Bischoff' target='_blank' rel='noopener noreferrer' class='link'>Xing</a> und <a href='https://www.linkedin.com/in/sbischoff' target='_blank' rel='noopener noreferrer' class='link'>LinkedIn</a>. Sind Sie Entwickler? Dann werfen Sie doch ein Auge auf meine Open Source Projekte auf <a href='https://github.com/sbischoff-ai' target='_blank' rel='noopener noreferrer' class='link'>GitHub</a>.",
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
            <ContentParagraph>
                <p v-html="$t('personalinfo2')"></p> 
            </ContentParagraph>
            <ContentTitle icon="poll-h">{{ $t('profile') }}</ContentTitle>
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
            <ProjectReferenceList :projects="projects"/>
        </ContentArea>
    </div>
</template>

<script>
import ContentTitle from '../components/ContentTitle';
import ContentArea from '../components/ContentArea';
import ContentParagraph from '../components/ContentParagraph';
import SkillChart from '../components/SkillChart';
import ProjectReferenceList from '../components/ProjectReferenceList';

import client from '../libs/client';

export default {
    name: 'AboutMe',
    components: {
      ContentTitle,
      ContentArea,
      ContentParagraph,
      SkillChart,
      ProjectReferenceList
    },
    data() {
        return {
            profile: {
                languages: [],
                frameworks: [],
                technologies: [],
                methods: []
            },
            projects: []
        };
    },
    mounted() {
        client.getProfileData(this.$root.$i18n.locale).then(data => {
            this.profile = data;
        });
        client.getProjectData(this.$root.$i18n.locale).then(data => {
            this.projects = data;
        });
        this.$root.$on('localeChange', locale => {
            client.getProfileData(locale).then(data => {
                this.profile = data;
            });
            client.getProjectData(locale).then(data => {
                this.projects = data;
            });
        })
    }
};
</script>

<style>

</style>