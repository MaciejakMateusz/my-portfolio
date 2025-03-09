import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export const Footer = () => {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 450);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className={'footer'}>
            <span>&copy; {new Date().getFullYear()} Mateusz Maciejak. {isMobile && <br/>} {t('allRightsReserved')}</span>
        </footer>
    );
}