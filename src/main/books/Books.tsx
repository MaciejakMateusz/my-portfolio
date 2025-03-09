import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {InfiniteXScroll} from "../projects/InfiniteXScroll.tsx";
import {useBookCards} from "../../hooks/useBookCards.tsx";

export const Books = () => {
    const {t} = useTranslation();
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});
    const cards = useBookCards();
    return (
        <div>
            <motion.div
                ref={ref}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <section className={'books'}>
                    <SectionHeader title={t('books')}
                                   description={t('booksDescription')}
                                   lightened={true}/>
                    <InfiniteXScroll children={cards}/>
                </section>
            </motion.div>
        </div>
    );
};