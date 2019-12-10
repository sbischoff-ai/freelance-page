<i18n>
{
    "en": {
        "title": "About Me",
        "personalinfo": "Hello, my name is Silas Bischoff. I'm a freelance software developer and data scientist.",
        "profile": "Profile",
        "languages": "Programming Languages",
        "technologies": "Technologies"
    },
    "de": {
        "title": "Über Mich",
        "personalinfo": "Hallo, mein Name ist Silas Bischoff. Ich bin ein freiberuflicher Software-Entwickler und Data Scientist.",
        "profile": "Profil",
        "languages": "Programmiersprachen",
        "technologies": "Technologien"
    }
}
</i18n>

<template>
    <div id="about-me">
        <ContentArea>
            <ContentTitle icon="address-card">{{ $t('title') }}</ContentTitle>
            <ContentParagraph image="potrait.png" imagePosition="right">{{ $t('personalinfo') }}</ContentParagraph>
            <ContentTitle icon="poll-h">{{ $t('profile') }}</ContentTitle>
            <ContentParagraph>
                <SkillChart
                    :title="$t('languages')"
                    :data="profile.languages"
                />
            </ContentParagraph>
            <ContentParagraph>
                <SkillChart
                    :title="$t('technologies')"
                    :data="profile.technologies"
                />
            </ContentParagraph>
        </ContentArea>
    </div>
</template>

<script>
import ContentTitle from '../components/ContentTitle';
import ContentArea from '../components/ContentArea';
import ContentParagraph from '../components/ContentParagraph';
import SkillChart from '../components/SkillChart';
import profile from '../data/profile';

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
            profile
        }
    }
};
</script>

<style>

</style>