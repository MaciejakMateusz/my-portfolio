import {useTranslation} from "react-i18next";

export const ProjectDescription = () => {
    const {t} = useTranslation();
    return (
        <div className={'project-description'}>
            <div>
                <h1 className={'project-description-header'}>Jak działają czujniki powietrza?</h1>
                <p>Czujniki mierzą różne parametry zanieczyszczeń w powietrzu, takie jak:</p>
                <ul>
                    <li className={'project-description-li'}>
                        PM2.5 – drobne cząstki stałe o średnicy ≤ 2,5 µm
                    </li>
                    <li className={'project-description-li'}>
                        PM10 – większe cząstki stałe o średnicy ≤ 10 µm
                    </li>
                    <li className={'project-description-li'}>
                        NO₂ (Dwutlenek azotu) – gaz powstały głównie na skutek ruchu samochodowego i spalania paliw
                    </li>
                    <li className={'project-description-li'}>
                        SO₂ (Dwutlenek siarki) – gaz powstały głównie podczas spalania węgla i ropy
                    </li>
                    <li className={'project-description-li'}>
                        CO (Tlenek węgla) – gaz pochodzący ze spalania paliw
                    </li>
                    <li className={'project-description-li'}>
                        O₃ (Ozon) – powstający w wyniku reakcji fotochemicznych w atmosferze
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