import {useTranslation} from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className={'footer'}>
            <span>&copy; {new Date().getFullYear()} Mateusz Maciejak. {t('allRightsReserved')}</span>
        </footer>
    );
}