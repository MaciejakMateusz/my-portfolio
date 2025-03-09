import {useTranslation} from "react-i18next";
import {IntroductionButtons} from "./IntroductionButtons.tsx";
import {forwardRef} from "react";

export const Start =  forwardRef(({projectsRef}: any, ref: any) => {
    const {t} = useTranslation();
    return (
        <div className={'landing-section'} ref={ref}>
            <div className={'centered-container'}>
                <div className={'centered-container-wrapper'}>
                    <span className={'section-header-title'}>Full Stack</span>
                    <span className={'section-header-title developer'}>Developer</span>
                    <span className={'section-header-description landing'}>{t('introductionMessage')}</span>
                    <IntroductionButtons projectsRef={projectsRef}/>
                </div>
            </div>
        </div>
    );
});