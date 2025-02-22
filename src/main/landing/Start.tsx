import {useTranslation} from "react-i18next";
import {IntroductionButtons} from "./IntroductionButtons.tsx";

export const Start = () => {
    const {t} = useTranslation();
    return (
        <div className={'landing-section'}>
            <div className={'centered-container'}>
                <div className={'introduction-wrapper'}>
                    <span className={'introduction-full-stack'}>Full Stack</span>
                    <span className={'introduction-full-stack developer'}>Developer</span>
                    <span className={'introduction-description'}>{t('')}</span>
                    <IntroductionButtons/>
                </div>
            </div>
        </div>

    );
}