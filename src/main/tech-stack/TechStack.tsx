import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {RadarChart} from "./RadarChart.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {TechsInfiniteScroll} from "./TechsInfiniteScroll.tsx";
import {forwardRef, useEffect, useState} from "react";
import {TechsInfiniteScrollMobile} from "./TechsInfiniteScrollMobile.tsx";

export const TechStack = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
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
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 60}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <section className={'tech-stack'}>
                    <SectionHeader title={t('techStack')} description={t('techStackDescription')}/>
                    <div className={'chart-container skills-chart'}>
                        <div className={`chart-box ${mobileMode ? 'chart-box-mobile' : ''}`}>
                            {mobileMode ? <TechsInfiniteScrollMobile/> : <TechsInfiniteScroll/>}
                            <div className={'continuous-scroll'}></div>
                            <RadarChart/>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
});