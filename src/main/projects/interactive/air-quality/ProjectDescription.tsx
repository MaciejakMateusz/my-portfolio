import {useTranslation} from "react-i18next";

export const ProjectDescription = () => {
    const {t} = useTranslation();
    return (
        <div className={'project-description'}>
            <div>
                <h1 className={'project-description-header'}>{t('airQuality_projectDescriptionHeader')}</h1>
                <p>{t('airQuality_projectDescriptionText1')}</p>
                <ul>
                    <li className={'project-description-li'}>
                        {t('airQuality_PM25')}
                    </li>
                    <li className={'project-description-li'}>
                        {t('airQuality_PM10')}
                    </li>
                    <li className={'project-description-li'}>
                        {t('airQuality_NO2')}
                    </li>
                    <li className={'project-description-li'}>
                        {t('airQuality_SO2')}
                    </li>
                    <li className={'project-description-li'}>
                        {t('airQuality_CO')}
                    </li>
                    <li className={'project-description-li'}>
                    {t('airQuality_O3')}
                    </li>
                </ul>
                <h1 className={'project-description-header'}>{t('airQuality_projectDescription')}</h1>
                <p>{t('airQuality_projectDescriptionText')}</p>
                <h2 className={'project-description-header'}>{t('airQuality_features')}</h2>
                <ul>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_feature1')}</strong>
                        {t('airQuality_feature1Text')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_feature2')}</strong>
                        {t('airQuality_feature2Text')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_feature3')}</strong>
                        {t('airQuality_feature3Text')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_feature4')}</strong>
                        {t('airQuality_feature4Text')}
                    </li>
                </ul>

                <h2 className={'project-description-header'}>{t('airQuality_technologies')}</h2>
                <ul>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_techFrontend')}</strong> {t('airQuality_techFrontendText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('airQuality_techBackend')}</strong> {t('airQuality_techBackendText')}
                    </li>
                </ul>

                <h2 className={'project-description-header'}>{t('airQuality_benefits')}</h2>
                <p>{t('airQuality_benefitsText')}</p>
            </div>
        </div>
    );
}