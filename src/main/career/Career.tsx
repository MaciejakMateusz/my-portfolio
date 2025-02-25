import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {JobPositions} from "./JobPositions.tsx";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";

export const Career = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}>
            <div className={'career'}>
                <SectionHeader title={t('career')} description={t('careerDescription')}/>
                <JobPositions/>
            </div>
        </motion.div>
    );
}