import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {forwardRef} from "react";
import {AboutPhotoChunk} from "./AboutPhotoChunk.tsx";
import {AboutDescriptionChunk} from "./AboutDescriptionChunk.tsx";
import {AboutHobbiesChunk} from "./AboutHobbiesChunk.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";

export const About = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();

    return (
        <div ref={ref}>
            <div className={'about'}>
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('about')} description={t('aboutDescription')}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div className={'main-wrapper'}>
                        <div className={'main-container'}>
                            <div className={'about-wrapper'}>
                                <AboutPhotoChunk/>
                                <AboutDescriptionChunk/>
                                <AboutHobbiesChunk/>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
});