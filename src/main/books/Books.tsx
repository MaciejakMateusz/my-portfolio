import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {InfiniteXScroll} from "../projects/InfiniteXScroll.tsx";
import {useBookCards} from "../../hooks/useBookCards.tsx";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {useState} from "react";
import {Helmet} from "react-helmet";
import {useInView} from "react-intersection-observer";

export const Books = () => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const {ref: helmetRef, inView: helmetInView} = useInView({triggerOnce: false});
    const [isYZero, setIsYZero] = useState(false);
    const cards = useBookCards();

    return (
        <div>
            <section className={'books'}>
                {helmetInView &&
                    <Helmet>
                        <title>{t('books')}</title>
                    </Helmet>}
                <MotionWrapper
                    motionRef={sectionRef}
                    inView={sectionInView}
                    initialY={120}
                    onYZero={setIsYZero}>
                    <SectionHeader title={t('books')}
                                   description={t('booksDescription')}
                                   lightened={true}
                                   isYZero={isYZero}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <InfiniteXScroll children={cards} ref={helmetRef}/>
                </MotionWrapper>
            </section>
        </div>
    );
};