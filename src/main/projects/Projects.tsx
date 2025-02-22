import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";


export const Projects = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="p-10 bg-gray-100 rounded-lg shadow-lg">
            <section className={'projects'}>
                <SectionHeader title={t('projects')} description={t('projectsDescription')}/>
                <img src={'/blurred-light.png'} className={'blurred-light'} alt={'Blurred light'}/>
                <div className={'projects-horizontal-scroll'}>
                    <div className={'project-card'}></div>
                    <div className={'project-card'}></div>
                    <div className={'project-card'}></div>
                    <div className={'project-card'}></div>
                </div>
            </section>
        </motion.div>
    );
}