import {useTranslation} from "react-i18next";

export const Introduction = () => {
    const {t} = useTranslation();
    return (
        <div className={'introduction-container'}>
            <div>
                <span className={'introduction-welcome'}>{t('hiIm')} <span className={'my-name'}>{t('myName')}</span></span>
                <span className={'introduction-full-stack'}>Full Stack</span>
                <span className={'introduction-developer'}>Developer</span>
                <span className={'introduction-description'}>
                Jestem młodszym full-stack developerem, który potrafi tworzyć wysokiej jakości aplikacje webowe. Moje umiejętności obejmują Spring, React, SQL oraz wiele innych technologii. Moje zaangażowanie w stosowanie najlepszych praktyk programistycznych.
                </span>
                <div className={'contact-button'}>Skontaktuj się</div>
            </div>
        </div>
    );
}