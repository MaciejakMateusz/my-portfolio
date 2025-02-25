import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {BooksCarousel} from "./BooksCarousel.tsx";
import {forwardRef} from "react";

export const Books = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: motionRef, inView} = useInView({triggerOnce: true, threshold: 0.2});
    return (
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <section className={'books'}>
                    <SectionHeader title={t('books')} description={t('booksDescription')}/>
                    <BooksCarousel/>
                </section>
            </motion.div>
        </div>
    );
});