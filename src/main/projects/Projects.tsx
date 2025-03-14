import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {forwardRef, useState} from "react";
import {InfiniteXScroll} from "./InfiniteXScroll.tsx";
import {useProjectCards} from "../../hooks/useProjectCards.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";


export const Projects = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const [isYZero, setIsYZero] = useState(false);
    const projectCards = useProjectCards();
    return (
        <div ref={ref}>
            <section className={'projects'}>
                <MotionWrapper
                    motionRef={sectionRef}
                    inView={sectionInView}
                    initialY={120}
                    onYZero={setIsYZero}>
                    <SectionHeader title={t('projects')}
                                   description={t('projectsDescription')}
                                   lightened={true}
                                   isYZero={isYZero}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <InfiniteXScroll children={projectCards}/>
                </MotionWrapper>
            </section>
        </div>
    );
});