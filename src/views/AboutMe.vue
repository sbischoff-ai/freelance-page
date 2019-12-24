<i18n>
{
    "en": {
        "person": "Person",
        "personalinfo": "Hello, my name is Silas Bischoff. I'm a freelance software developer and data scientist from the Düsseldorf area. The things I could do for you include, for example:<br><br><ul><li>A professional analysis of your business segments or customer base</li> <li>The complete development of a data-driven application from conception to integration</li> <li>Or simply full stack support as a member of your development team.</li></ul>",
        "personalinfo2": "My goal is to develop sustainable technological innovations that noticeably improve people's lives and work. With this sense of purpose and responsibility, I also dedicate myself to the requirements of my customers. If you are interested, you can reach me via my <a href='/en/contact#main-view' class='link'>contact form</a> or on <a href='https://www.xing.com/profile/Silas_Bischoff' target='_blank' rel='noopener noreferrer' class='link'>Xing</a> and <a href='https://www.linkedin.com/in/sbischoff' target='_blank' rel='noopener noreferrer' class='link'>LinkedIn</a>. Are you a developer? Then have a look at my open source projects on <a href='https://github.com/sbischoff-ai' target='_blank' rel='noopener noreferrer' class='link'>GitHub</a>.",
        "background": "Background",
        "backgroundtext": "In addition to computer science, my academic roots are primarily in the natural sciences. As a theoretical physicist, I learned to apply the scientific method by using mathematical models and computer simulations to derive regularities from observations of our world and make them usable. In my professional career as a data scientist in an IT consulting company, I took exactly this knowledge with me. I combined it with my over 15 years of programming experience in numerous languages, applying it to everyday and business problems and adding value.",
        "profile": "Profile",
        "languages": "Programming Languages",
        "technologies": "Technologies",
        "frameworks": "Frameworks",
        "methods": "Methods",
        "projects": "Projects",
        "bagreferenceintro": "Here is an excerpt from the projects that I worked on for various customers as a permanent employee of the IT consulting company <a href='https://www.brockhaus-ag.de' target='_blank' rel='noopener noreferrer' class='link'>BROCKHAUS AG</a>:"
    },
    "de": {
        "person": "Person",
        "personalinfo": "Hallo, mein Name ist Silas Bischoff. Ich bin ein freiberuflicher Softwareentwickler und Data Scientist aus dem Großraum Düsseldorf. Die Dinge, die ich für Sie tun könnte, beinhalten beispielsweise:<br><br><ul><li>Eine professionelle Analyse Ihrer Geschäftsfelder oder Ihres Kundenstammes</li> <li>Die vollständige Entwicklung einer datengetriebenen Anwendung von Konzeption bis Integration</li> <li>Oder einfach Full-Stack-Unterstützung als Mitglied Ihres Entwicklungsteams.</li></ul>",
        "personalinfo2": "Mein Ziel ist es, nachhaltige technologische Innovationen zu entwickeln, die Leben und Arbeit von Menschen spürbar verbessern. Mit diesem Ziel- und Verantwortungsbewusstsein widme ich mich auch den Anforderungen meiner Kunden. Bei Interesse erreichen Sie mich über mein <a href='/de/contact#main-view' class='link'>Kontaktformular</a> oder auf <a href='https://www.xing.com/profile/Silas_Bischoff' target='_blank' rel='noopener noreferrer' class='link'>Xing</a> und <a href='https://www.linkedin.com/in/sbischoff' target='_blank' rel='noopener noreferrer' class='link'>LinkedIn</a>. Sind Sie EntwicklerIn? Dann werfen Sie doch ein Auge auf meine Open Source Projekte auf <a href='https://github.com/sbischoff-ai' target='_blank' rel='noopener noreferrer' class='link'>GitHub</a>.",
        "background": "Hintergrund",
        "backgroundtext": "Neben der Informatik liegen meine akademischen Wurzeln vor allem in der Naturwissenschaft. Als theoretischer Physiker habe ich gelernt, die wissenschaftliche Methode anzuwenden, indem ich mit mathematischen Modellen und Computersimulationen Regelmäßigkeiten aus Beobachungen unserer Welt ableite und nutzbar mache. In meinen beruflichen Werdegang als Data Scientist in einem IT-Consulting-Unternehmen habe ich genau dieses Wissen mitgenommen, um es mit meinen über 15 Jahren Programmiererfahrung in zahlreichen Sprachen zu kombinieren und wertschöpfend auf Alltags- und Geschäftsprobleme anzuwenden.",
        "profile": "Profil",
        "languages": "Programmiersprachen",
        "technologies": "Technologien",
        "frameworks": "Frameworks",
        "methods": "Methoden",
        "projects": "Projekte",
        "bagreferenceintro": "Hier finden Sie einen Auszug aus den Projekten, die ich als festangestellter Consultant der <a href='https://www.brockhaus-ag.de' target='_blank' rel='noopener noreferrer' class='link'>BROCKHAUS AG</a> für verschiedene Kunden bearbeitet habe:"
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
        </ContentArea>
        <ContentArea>
            <ContentTitle icon="graduation-cap">{{ $t('background') }}</ContentTitle>
            <ContentParagraph>{{ $t('backgroundtext') }}</ContentParagraph>
            <div class="text-center"><BackgroundItem
                v-for="backgroundItem in background"
                :key="backgroundItem.degree" 
                :data="backgroundItem"
                class="m-2"
            /></div>
        </ContentArea>
        <ContentArea>
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
        </ContentArea>
        <ContentArea>
            <ContentTitle icon="tasks">{{ $t('projects') }}</ContentTitle>
            <ContentParagraph>
                <p v-html="$t('bagreferenceintro')"></p>
            </ContentParagraph>
            <ProjectReferenceList :projects="projects"/>
        </ContentArea>
    </div>
</template>

<script>
import ContentTitle from '../components/ContentTitle';
import ContentArea from '../components/ContentArea';
import ContentParagraph from '../components/ContentParagraph';
import BackgroundItem from '../components/BackgroundItem';
import SkillChart from '../components/SkillChart';
import ProjectReferenceList from '../components/ProjectReferenceList';

import client from '../libs/client';

export default {
    name: 'AboutMe',
    components: {
      ContentTitle,
      ContentArea,
      ContentParagraph,
      BackgroundItem,
      SkillChart,
      ProjectReferenceList
    },
    data() {
        return {
            background: [],
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
        client.getResource('profile', this.$root.$i18n.locale).then(data => {
            this.profile = data;
        });
        client.getResource('projects', this.$root.$i18n.locale).then(data => {
            this.projects = data;
        });
        client.getResource('background', this.$root.$i18n.locale).then(data => {
            this.background = data;
        });
        this.$root.$on('localeChange', locale => {
            client.getResource('profile', locale).then(data => {
                this.profile = data;
            });
            client.getResource('projects', locale).then(data => {
                this.projects = data;
            });
            client.getResource('background', locale).then(data => {
                this.background = data;
            });
        })
    }
};
</script>

<style>

</style>