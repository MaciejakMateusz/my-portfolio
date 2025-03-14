import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {forwardRef} from "react";
import {ContactDetails} from "./ContactDetails.tsx";
import {ContactForm} from "./ContactForm.tsx";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";

export const Contact = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();

    return (
        <div ref={ref}>
            <div className={'about'}>
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('contact')} description={t('contactDescription')}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div className={'main-wrapper'}>
                        <div className={'main-container'}>
                            <div className={'contact-wrapper'}>
                                <ContactDetails/>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
});