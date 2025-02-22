import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {RadarChart} from "./RadarChart.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 60}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="p-10 bg-gray-100 rounded-lg shadow-lg">
            <section className={'skills'}>
                <SectionHeader title={t('skills')} description={t('skillsDescription')}/>
                <div className={'skills-container'}>
                    <div className={'skills-box'}>
                        <div className={'continuous-scroll'}></div>
                        <RadarChart/>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}