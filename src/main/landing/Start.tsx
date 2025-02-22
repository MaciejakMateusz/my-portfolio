import {useTranslation} from "react-i18next";
import {IntroductionButtons} from "./IntroductionButtons.tsx";

export const Start = () => {
    const {t} = useTranslation();
    return (
        <div className={'landing-section'}>
            <div className={'centered-container'}>
                <div className={'centered-container-wrapper'}>
                    <span className={'section-header-title'}>Full Stack</span>
                    <span className={'section-header-title developer'}>Developer</span>
                    <span className={'section-header-description landing'}>{t('introductionMessage')}</span>
                    <IntroductionButtons/>
                </div>
            </div>
        </div>
    );
}