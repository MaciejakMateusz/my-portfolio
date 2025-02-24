import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import {ProjectsCarousel} from "./ProjectsCarousel.tsx";


export const Projects = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}>
            <section className={'projects'}>
                <SectionHeader title={t('projects')} description={t('projectsDescription')}/>
                <ProjectsCarousel/>
            </section>
        </motion.div>
    );
}