import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {JobPositions} from "./JobPositions.tsx";
import {forwardRef, useState} from "react";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {Helmet} from "react-helmet";
import {useInView} from "react-intersection-observer";

export const Career = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const {ref: helmetRef, inView: helmetInView} = useInView({triggerOnce: false});
    const [isYZero, setIsYZero] = useState(false);

    return (
        <div ref={ref}>
            {helmetInView &&
                <Helmet>
                    <title>{t('career')}</title>
                </Helmet>}
            <div className={'career'}>
                <MotionWrapper
                    motionRef={sectionRef}
                    inView={sectionInView}
                    initialY={120}
                    onYZero={setIsYZero}>
                    <SectionHeader title={t('career')}
                                   description={t('careerDescription')}
                                   lightened={true}
                                   isYZero={isYZero}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div ref={helmetRef}>
                        <JobPositions/>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
});