import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {TechStackChart} from "./TechStackChart.tsx";
import {TechsInfiniteScroll} from "./TechsInfiniteScroll.tsx";
import {forwardRef, useEffect, useState} from "react";
import {TechsInfiniteScrollMobile} from "./TechsInfiniteScrollMobile.tsx";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";
import {Helmet} from "react-helmet";
import {useInView} from "react-intersection-observer";

export const TechStack = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const {ref: helmetRef, inView: helmetInView} = useInView({triggerOnce: false});
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
            {helmetInView &&
                <Helmet>
                    <title>Tech Stack</title>
                </Helmet>}
            <section className={'tech-stack'}>
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('techStack')} description={t('techStackDescription')}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div className={'chart-container skills-chart'} ref={helmetRef}>
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