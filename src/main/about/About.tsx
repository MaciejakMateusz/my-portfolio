import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {forwardRef} from "react";
import {AboutPhotoChunk} from "./AboutPhotoChunk.tsx";
import {AboutDescriptionChunk} from "./AboutDescriptionChunk.tsx";
import {AboutHobbiesChunk} from "./AboutHobbiesChunk.tsx";

export const About = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: motionRef, inView} = useInView({triggerOnce: true, threshold: 0.2});

    return (
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <div className={'about'}>
                    <SectionHeader title={t('about')} description={t('aboutDescription')}/>
                    <div className={'main-wrapper'}>
                        <div className={'main-container'}>
                            <div className={'about-wrapper'}>
                                <AboutPhotoChunk/>
                                <AboutDescriptionChunk/>
                                <AboutHobbiesChunk/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});