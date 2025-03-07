import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {JobPositions} from "./JobPositions.tsx";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import {forwardRef} from "react";

export const Career = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <div className={'career'}>
                    <SectionHeader title={t('career')}
                                   description={t('careerDescription')}
                                   lightened={true}/>
                    <JobPositions/>
                </div>
            </motion.div>
        </div>
    );
});