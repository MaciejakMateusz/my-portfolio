import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {forwardRef} from "react";
import {ContactDetails} from "./ContactDetails.tsx";
import {ContactForm} from "./ContactForm.tsx";

export const Contact = forwardRef((_, ref: any) => {
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
                    <SectionHeader title={t('contact')} description={t('contactDescription')}/>
                    <div className={'main-container'}>
                        <div className={'contact-wrapper'}>
                            <ContactDetails/>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});