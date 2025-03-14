import {ActivityCalendar} from "./ActivityCalendar.tsx";
import {forwardRef, useState} from "react";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {ActivityControlPanel} from "./ActivityControlPanel.tsx";
import {useSelector} from "react-redux";
import {useInCustomView} from "../../hooks/hooks.ts";
import {MotionWrapper} from "../shared/MotionWrapper.tsx";
import {Helmet} from "react-helmet";
import {useInView} from "react-intersection-observer";

export const Activity = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const {ref: sectionRef, inView: sectionInView} = useInCustomView();
    const {ref: widgetRef, inView: widgetInView} = useInCustomView();
    const {ref: helmetRef, inView: helmetInView} = useInView({triggerOnce: false});
    const defaultYear: any = {value: new Date().getFullYear(), label: new Date().getFullYear()};
    const [chosenYear, setChosenYear] = useState<any>(defaultYear);
    const {error} = useSelector<any, any>(state => state.contributions.contributions);

    return (
        <div ref={ref}>
            <section className={'activity'}>
                {helmetInView &&
                    <Helmet>
                        <title>{t('activity')}</title>
                    </Helmet>}
                <MotionWrapper motionRef={sectionRef} inView={sectionInView} initialY={120}>
                    <SectionHeader title={t('activity')} description={t('activityDescription')}/>
                </MotionWrapper>
                <MotionWrapper motionRef={widgetRef} inView={widgetInView} initialY={160}>
                    <div className={'chart-container activity-chart'} ref={helmetRef}>
                        <ActivityControlPanel setChosenYear={setChosenYear} chosenYear={chosenYear}/>
                        <ActivityCalendar year={chosenYear}/>
                        {error && <span className={'server-down-msg block'}>{t('restApiDown')}</span>}
                    </div>
                </MotionWrapper>
            </section>
        </div>
    );
});