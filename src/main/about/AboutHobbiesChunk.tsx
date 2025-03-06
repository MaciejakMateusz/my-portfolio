import {useTranslation} from "react-i18next";

export const AboutHobbiesChunk = () => {
    const {t} = useTranslation();
    return (
        <div className={'about-hobbies-container main-typography'}>
            <p className={'about-description-header'}>{t('guitar')}</p>
            <p className={'about-description'}>
                {t('guitarDescription')}
            </p>
            <p className={'about-description-header'}>Gaming</p>
            <p className={'about-description'}>
                {t('gamingDescription')}
            </p>
        </div>
    );
}