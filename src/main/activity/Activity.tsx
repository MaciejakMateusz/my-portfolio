import {ActivityCalendar} from "./ActivityCalendar.tsx";
import Select from "react-select";
import {chartStyles} from "../../styles/styles.ts";
import {useEffect, useState} from "react";
import {YearSelect} from "../../types/YearSelect.ts";
import {SingleValue} from "react-select";

export const Activity = () => {
    const [years, setYears] = useState<YearSelect[]>();
    const defaultYear: SingleValue<YearSelect> = {value: 2024, label: 2024};
    const [chosenYear, setChosenYear] = useState<SingleValue<YearSelect>>(defaultYear);

    const mapYears = () => {
        const currentYear: number = new Date().getFullYear();
        let result: YearSelect[] = [];
        for (let y = 2023; y <= currentYear; y++) {
            result.push({ value: y, label: y });
        }
        setYears(result);
    }

    useEffect(() => {
        mapYears();
    }, []);

    return (
        <section className={'activity'}>
            <div className={'activity-control-panel'}>
                <Select
                    id="period-year"
                    name="period-year"
                    value={chosenYear}
                    options={years}
                    onChange={(selected) => setChosenYear(selected)}
                    styles={chartStyles}
                    isSearchable={false}
                />
            </div>
            <ActivityCalendar year={chosenYear?.value}/>
        </section>
    );
}