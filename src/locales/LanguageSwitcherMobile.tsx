import {ReactSVG} from "react-svg";
import {useState} from "react";
import {getLanguage} from "../util/util.ts";
import {useTranslation} from "react-i18next";

export const LanguageSwitcherMobile = () => {
    const {i18n} = useTranslation();
    const activeLng = getLanguage() || 'pl-PL';
    const supported = ['PL', 'EN', 'NL'];
    const [isDropped, setIsDropped] = useState(false);

    const formatToUppercase = (lng: string) => {
        switch (lng) {
            case 'pl-PL':
                return 'PL';
            case 'pl':
                return 'PL';
            case 'en':
                return 'EN';
            case 'nl':
                return 'NL';
            default:
                return 'PL';
        }
    }

    const changeLanguageMobile = (lng: string) => {
        i18n.changeLanguage(lng.toLowerCase());
        document.cookie = `i18next=${lng.toLowerCase()}; path=/`;
        setIsDropped(false);
    }

    return (
        <div className={'lang-switcher-mobile-container'}>
            <div className={'lang-switcher-mobile'} onClick={() => setIsDropped(!isDropped)}>
                <span className={'lang-switcher-mobile-wrapper'}>
                    <span className={'lng-mobile-display'}>{formatToUppercase(activeLng)}</span>
                    <ReactSVG src={'/drop-icon.svg'} className={`drop-icon ${isDropped && 'dropped'}`}/>
                </span>
                {isDropped && supported.filter(l => l !== formatToUppercase(activeLng)).map(l => (
                    <div className={'lng-mobile'}
                         onClick={(e) => {
                             e.stopPropagation();
                             changeLanguageMobile(l);
                         }}
                         key={l}>
                        {l}
                    </div>
                ))}
            </div>
        </div>
    );
}