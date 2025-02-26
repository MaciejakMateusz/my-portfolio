import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import {forwardRef} from "react";
import {InfiniteXScroll} from "./InfiniteXScroll.tsx";
import {useProjectCards} from "../../hooks/useProjectCards.tsx";


export const Projects =  forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const projectCards = useProjectCards();
    return (
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <section className={'projects'}>
                    <SectionHeader title={t('projects')} description={t('projectsDescription')}/>
                    <InfiniteXScroll children={projectCards}/>
                </section>
            </motion.div>
        </div>
    );
});