import { useTranslation } from 'react-i18next';
import {getLanguage} from "../util/util.ts";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const activeLng = getLanguage() || 'pl-PL';

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.cookie = `i18next=${lng}; path=/`;
    };

    return (
        <div className={'lang-switcher'}>
            <div className={`lang-switcher-btn ${['pl', 'pl-PL'].includes(activeLng) ? 'active-lng' : ''}`}>
                <span onClick={() => changeLanguage('pl')}>Polski</span>
            </div>
            &nbsp;|&nbsp;
            <div className={`lang-switcher-btn ${activeLng === 'en' ? 'active-lng' : ''}`}>
                <span onClick={() => changeLanguage('en')}>English</span>
            </div>
            &nbsp;|&nbsp;
            <div className={`lang-switcher-btn ${activeLng === 'nl' ? 'active-lng' : ''}`}>
                <span onClick={() => changeLanguage('nl')}>Nederlands</span>
            </div>
        </div>
    );
};