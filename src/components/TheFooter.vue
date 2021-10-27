<i18n>
{
  "en": {
    "dataprivacy": "Data Privacy",
    "dataprivacystatement": "Data Privacy Statement",
    "legalnotice": "Legal Notice"
  },
  "de": {
    "dataprivacy": "Datenschutz",
    "dataprivacystatement": "Datenschutzerklärung",
    "legalnotice": "Impressum"
  }
}
</i18n>

<template>
    <footer class="text-light bg-dark">
        <b-container fluid>
            <b-row align-h="between" align-v="center">
                <b-col cols="auto">
                    <b-row>
                        <b-col>
                            <b-link v-b-modal.modal-data-privacy class="footer-link">{{ $t('dataprivacy') }}</b-link>
                        </b-col>
                        <b-col>
                            <b-link v-b-modal.modal-legal-notice class="footer-link">{{ $t('legalnotice') }}</b-link>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="auto">
                    <b-row align-h="end" align-v="center">
                        <b-col><small style="white-space: nowrap;">© 2019-2021 Silas Bischoff</small></b-col>
                        <b-col>
                            <b-link href="https://github.com/sbischoff-ai" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon :icon="['fab', 'github']" class="footer-link" size="lg"/>
                            </b-link>
                            <b-link href="https://www.xing.com/profile/Silas_Bischoff" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon :icon="['fab', 'xing']" class="footer-link" size="lg"/>
                            </b-link>
                            <b-link href="https://www.linkedin.com/in/sbischoff" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon :icon="['fab', 'linkedin']" class="footer-link" size="lg"/>
                            </b-link>
                            <b-link href="https://twitter.com/LeCoalfish" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon :icon="['fab', 'twitter']" class="footer-link" size="lg"/>
                            </b-link>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <b-modal id="modal-data-privacy" size="xl" scrollable hide-footer centered :title="$t('dataprivacystatement')">
            <DataPrivacyStatment/>
        </b-modal>
        <b-modal id="modal-legal-notice" size="lg" scrollable hide-footer centered :title="$t('legalnotice')">
            <LegalNotice/>
        </b-modal>
    </footer>
</template>

<script>
import DataPrivacyStatment from './DataPrivacyStatement';
import LegalNotice from './LegalNotice';

export default {
    name: 'TheFooter',
    components: {
        DataPrivacyStatment,
        LegalNotice
    }
};
</script>

<style lang="scss">
@import '../theme.scss';

.footer-link {
    white-space: nowrap;
    margin: 5px; 
    color: $gray-500;
}

.footer-link:hover {
    color: $gray-100;
    text-decoration: none;
}
</style>