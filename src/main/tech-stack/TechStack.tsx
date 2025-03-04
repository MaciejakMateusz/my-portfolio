import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {RadarChart} from "./RadarChart.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {SkillsInfiniteScroll} from "./SkillsInfiniteScroll.tsx";
import {forwardRef} from "react";

export const TechStack = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
                        <div className={'chart-box'}>
                            <SkillsInfiniteScroll/>
                            <div className={'continuous-scroll'}></div>
                            <RadarChart/>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
});