import {ActivityCalendar} from "./ActivityCalendar.tsx";
import {forwardRef, useState} from "react";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import {ActivityControlPanel} from "./ActivityControlPanel.tsx";
import {useSelector} from "react-redux";

export const Activity = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const defaultYear: any = {value: new Date().getFullYear(), label: new Date().getFullYear()};
    const [chosenYear, setChosenYear] = useState<any>(defaultYear);
    const {error} = useSelector<any, any>(state => state.contributions.contributions);

    return (
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <section className={'activity'}>
                    <SectionHeader title={t('activity')} description={t('activityDescription')}/>
                    <div className={'chart-container activity-chart'}>
                        <ActivityControlPanel setChosenYear={setChosenYear} chosenYear={chosenYear}/>
                        <ActivityCalendar year={chosenYear}/>
                        {error && <span className={'server-down-msg block'}>{t('restApiDown')}</span>}
                    </div>
                </section>
            </motion.div>
        </div>
    );
});