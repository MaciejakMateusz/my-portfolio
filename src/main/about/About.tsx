import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {HorizontalCard} from "../shared/HorizontalCard.tsx";
import {forwardRef} from "react";

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
                    <div className={'main-container'}>

                        <div className={'about-wrapper'}>
                            <div className={'about-photo-container'}>
                                <img src={'/m-maciejak-image.png'} alt={'M. Maciejak'} className={'about-photo'}/>
                                <div className={'about-photo-gradient'}/>
                                <div className={'about-photo-signature'}>Mateusz Maciejak</div>
                            </div>
                            <div className={'about-description-container main-typography'}>
                                <p className={'about-description-header'}>A po godzinach...</p>
                                <p className={'about-description'}>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus consectetur dictum vestibulum
                                    consectetur. Sem quam ac cursus bibendum malesuada sed nec ullamcorper. Non volutpat
                                    integer tortor enim ut leo dolor. Enim mauris libero.<br/><br/>
                                    Elit integer tincidunt id montes at metus eu vulputate eleifend. Faucibus tempus
                                    malesuada viverra tempus nunc urna. Amet netus arcu eget tincidunt sodales. Et
                                    libero
                                    vitae mattis dolor tellus mauris netus nibh imperdiet. Ridiculus eu ultricies et
                                    cras
                                    nunc pellentesque.
                                </p>
                            </div>
                            <div className={'about-hobbies-container main-typography'}>
                                <HorizontalCard header={t('coding')}
                                                description={'Lorem ipsum dolor sit amet consectetur. Sagittis nibh in at diam eget. Aliquam.'}
                                                icon={'/placeholder-icon.svg'}/>
                                <HorizontalCard header={'Gaming'}
                                                description={'Lorem ipsum dolor sit amet consectetur. Sagittis nibh in at diam eget. Aliquam.'}
                                                icon={'/placeholder-icon.svg'}/>
                                <HorizontalCard header={t('guitar')}
                                                description={'Lorem ipsum dolor sit amet consectetur. Sagittis nibh in at diam eget. Aliquam.'}
                                                icon={'/placeholder-icon.svg'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
});