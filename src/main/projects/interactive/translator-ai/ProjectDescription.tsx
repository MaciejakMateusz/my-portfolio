import {useTranslation} from "react-i18next";

export const ProjectDescription = () => {
    const {t} = useTranslation();
    return (
        <div className={'project-description'}>
            <div>
                <h1 className={'project-description-header'}>{t('translator_projectDescriptionTitle')}</h1>
                <p>{t('translator_projectDescriptionText')}</p>

                <h2  className={'project-description-header'}>{t('translator_keyFeaturesTitle')}</h2>
                <ul>
                    <li className={'project-description-li'}>
                        <strong>{t('translator_languageDetection')}:&nbsp;</strong>
                        {t('translator_languageDetectionText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('translator_contextualTranslation')}:&nbsp;</strong>
                        {t('translator_contextualTranslationText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('translator_uiWithReactTS')}:&nbsp;</strong>
                        {t('translator_uiWithReactTSText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('translator_stateManagement')}:&nbsp;</strong>
                        {t('translator_stateManagementText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('translator_dynamicInputSelection')}:&nbsp;</strong>
                        {t('translator_dynamicInputSelectionText')}
                    </li>
                </ul>

                <h2 className={'project-description-header'}>{t('translator_backendAndAPIIntegrationTitle')}</h2>
                <ul>
                    <li className={'project-description-li'}>{t('translator_springBootText')}</li>
                    <li className={'project-description-li'}>{t('translator_springSecurityText')}</li>
                    <li className={'project-description-li'}>{t('translator_restApiArchitectureText')}</li>
                </ul>
                <h2 className={'project-description-header'}>{t('translator_usageAndBenefitsTitle')}</h2>
                <p>{t('translator_usageAndBenefitsText')}</p>
            </div>
        </div>
    );
}