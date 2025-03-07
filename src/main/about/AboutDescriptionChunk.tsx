import {useTranslation} from "react-i18next";

export const AboutDescriptionChunk = () => {
    const {t} = useTranslation();
    return (
        <div className={'about-description-container main-typography'}>
            <p className={'about-description-header'}>{t('afterHours')}</p>
            <p className={'about-description'}>
                {t('aboutMeDescription')}
            </p>
        </div>
    );
}