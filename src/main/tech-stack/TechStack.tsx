import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {TechStackChart} from "./TechStackChart.tsx";
import {TechsInfiniteScroll} from "./TechsInfiniteScroll.tsx";
import {forwardRef, useEffect, useState} from "react";
import {TechsInfiniteScrollMobile} from "./TechsInfiniteScrollMobile.tsx";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";

export const TechStack = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const [mobileMode, setMobileMode] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileMode(window.innerWidth <= 1000);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={ref}>
            <section className={'tech-stack'}>
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('techStack')} description={t('techStackDescription')}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div className={'chart-container skills-chart'}>
                        <div className={`chart-box ${mobileMode ? 'chart-box-mobile' : ''}`}>
                            {mobileMode ? <TechsInfiniteScrollMobile/> : <TechsInfiniteScroll/>}
                            <div className={'continuous-scroll'}></div>
                            <TechStackChart/>
                        </div>
                    </div>
                </MotionWrapper>
            </section>
        </div>
    );
});