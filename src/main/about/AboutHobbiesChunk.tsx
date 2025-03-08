import {useTranslation} from "react-i18next";

export const AboutHobbiesChunk = () => {
    const {t} = useTranslation();
    return (
        <div className={'about-hobbies-container main-typography'}>
            <div className={'hobby-container'}>
                <p className={'about-description-header'}>{t('guitar')}</p>
                <p className={'about-description'}>
                    {t('guitarDescription')}
                </p>
            </div>
            <div className={'hobby-container'}>
                <p className={'about-description-header'}>Gaming</p>
                <p className={'about-description'}>
                    {t('gamingDescription')}
                </p>
            </div>
        </div>
    );
}