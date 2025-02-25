import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {RadarChart} from "./RadarChart.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {SkillsInfiniteScroll} from "./SkillsInfiniteScroll.tsx";

export const Skills = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 60}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}>
            <section className={'skills'}>
                <SectionHeader title={t('skills')} description={t('skillsDescription')}/>
                <div className={'chart-container skills-chart'}>
                    <div className={'chart-box'}>
                        <SkillsInfiniteScroll/>
                        <div className={'continuous-scroll'}></div>
                        <RadarChart/>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}