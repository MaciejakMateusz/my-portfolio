import {useTranslation} from "react-i18next";

export const NavBar = () => {
    const {t} = useTranslation();

    return (
        <div className={'fixed-nav-bar-wrapper'}>
            <div className={'nav-button active'}>Home</div>
            <div className={'nav-button'}>{t('activity')}</div>
            <div className={'nav-button'}>{t('experience')}</div>
            <div className={'nav-button'}>{t('projects')}</div>
            <div className={'nav-button'}>{t('about')}</div>
            <div className={'nav-button'}>{t('contact')}</div>
        </div>
    );
}