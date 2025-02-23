import {ActivityCalendar} from "./ActivityCalendar.tsx";
import {useEffect, useState} from "react";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {Contribution} from "../../types/Contribution.ts";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";

export const Activity = () => {
    const {t} = useTranslation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
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
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 100}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="p-10 bg-gray-100 rounded-lg shadow-lg">
            <section className={'activity'}>
                <SectionHeader title={t('activity')} description={t('activityDescription')}/>
                <div className={'chart-container activity-chart'}>
                    <div className={'activity-control-panel'}>
                        <span>Ilość commitów w {chosenYear} roku: <span className={'white-text'}>{totalSum}</span></span>
                        <div className={'year-buttons'}>
                            {years?.map((year: number) => (
                                <button className={`primary-button spaced ${chosenYear !== year ? 'inactive' : ''}`}
                                        onClick={() => setChosenYear(year)}>
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ActivityCalendar year={chosenYear}/>
                </div>
            </section>
        </motion.div>

    );
}