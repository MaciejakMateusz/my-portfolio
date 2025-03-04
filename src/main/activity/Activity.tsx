import {ActivityCalendar} from "./ActivityCalendar.tsx";
import {forwardRef, useEffect, useState} from "react";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {Contribution} from "../../types/Contribution.ts";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";

export const Activity = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const { ref: motionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const [years, setYears] = useState<number[]>();
    const defaultYear: number = 2024;
    const [chosenYear, setChosenYear] = useState<number>(defaultYear);
    const {data} = useSelector<any, any>(state => state.contributions.contributions);
    const totalSum = data.reduce((sum: number, item: Contribution) => sum + item.value, 0);

    const mapYears = () => {
        const currentYear: number = new Date().getFullYear();
        let result: number[] = [];
        for (let y = 2023; y <= currentYear; y++) {
            result.push(y);
        }
        setYears(result);
    }

    useEffect(() => {
        mapYears();
    }, []);

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
                        <div className={'activity-control-panel'}>
                            <span className={'white-text'}>{t('commitsAmount')} {totalSum}</span>
                            <div className={'year-buttons'}>
                                {years?.map((year: number) => (
                                    <button className={`primary-button spaced ${chosenYear !== year ? 'inactive' : ''}`}
                                            onClick={() => setChosenYear(year)}
                                            key={year}>
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <ActivityCalendar year={chosenYear}/>
                    </div>
                </section>
            </motion.div>
        </div>
    );
});