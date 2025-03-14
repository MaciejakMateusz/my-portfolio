import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {JobPositions} from "./JobPositions.tsx";
import {forwardRef} from "react";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";

export const Career = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();

    return (
        <div ref={ref}>
            <div className={'career'}>
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('career')}
                                   description={t('careerDescription')}
                                   lightened={true}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <JobPositions/>
                </MotionWrapper>
            </div>
        </div>
    );
});