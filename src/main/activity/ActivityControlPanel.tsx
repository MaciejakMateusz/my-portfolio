import {useEffect, useState} from "react";
import {Contribution} from "../../types/Contribution.ts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import Select from "react-select";
import {mainSelect} from "../../styles/selectStyles.ts";

export const ActivityControlPanel = ({setChosenYear, chosenYear}: any) => {
    const {t} = useTranslation();
    const [years, setYears] = useState<any[]>();
    const {data} = useSelector<any, any>(state => state.contributions.contributions);
    const totalSum = data.reduce((sum: number, item: Contribution) => sum + item.value, 0);
    const [isMobile, setIsMobile] = useState(false);

    const mapYears = () => {
        const currentYear: number = new Date().getFullYear();
        let result: any[] = [];
        for (let y = 2023; y <= currentYear; y++) {
            result.push({value: y, label: y});
        }
        setYears(result.sort((a, b) => b.value - a.value));
    }

    useEffect(() => {
        mapYears();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) setIsMobile(true);
            else setIsMobile(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={'activity-control-panel'}>
            <span className={'white-text'}>{t('commitsAmount')} {totalSum}</span>
            {isMobile ?
                <Select id={'activity-years'}
                        name={'activity-years'}
                        options={years?.filter(year => year.value !== chosenYear.value)}
                        value={chosenYear}
                        onChange={(selected) => setChosenYear(selected)}
                        styles={mainSelect}
                        isSearchable={false}/>
                :
                <div className={'year-buttons'}>
                    {years?.map((year: any) => (
                        <button className={`primary-button spaced ${chosenYear.value !== year.value ? 'inactive' : ''}`}
                                onClick={() => setChosenYear(year)}
                                key={year.value}>
                            {year.value}
                        </button>
                    ))}
                </div>
            }

        </div>
    );
}