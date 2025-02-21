import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import Select from "react-select";
import {chartStyles} from "../../../../styles/styles.ts";
import {AirQualityChart} from "./AirQualityChart.tsx";
import {
    fetchAQCountries,
    fetchAQLocations,
    setChosenCountry,
    setChosenLocation,
    setChosenMonth,
    setChosenYear
} from "../../../../slices/airQualitySlice.ts";
import {useTranslation} from "react-i18next";
import {getMonth} from "../../../../util/util.ts";

export const AirQuality = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {chosenCountry, chosenLocation, chosenYear, chosenMonth} = useSelector((state: any) => state.airQuality.view);
    const {data: countriesData} = useSelector((state: any) => state.airQuality.fetchCountries);
    const {data: locationsData} = useSelector((state: any) => state.airQuality.fetchLocations);

    const getYears = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: currentYear - 1979 }, (_, index) => ({
            value: 1980 + index,
            label: 1980 + index
        })).sort((a, b) => b.value - a.value);
    };

    const getMonths = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const monthsLength = chosenYear.value === currentYear ? currentMonth : 12;
        return Array.from({length: monthsLength}, (_, index) => ({
            value: (index + 1).toString().padStart(2, '0'),
            label: getMonth(index + 1, t)
        }));
    };

    useEffect(() => {
        dispatch(fetchAQCountries());
    }, [dispatch]);

    useEffect(() => {
        if (chosenCountry) {
            dispatch(fetchAQLocations(chosenCountry.value));
        }
    }, [chosenCountry, dispatch]);

    useEffect(() => {
        if (locationsData?.results?.length) {
            dispatch(setChosenLocation({
                value: locationsData.results[0],
                label: locationsData.results[0].name
            }));
        }
    }, [locationsData, dispatch]);

    return (
        <section className={'aq-container'}>
            <header className={'aq-control-panel'}>
                <div className={'aq-locality-controls'}>
                    <div className={'aq-select'}>
                        <Select
                            id="aq-country"
                            name="aq-country"
                            value={chosenCountry}
                            options={countriesData?.results?.map((data: any) => ({
                                value: data.id, label: data.name
                            }))}
                            onChange={(selected) => dispatch(setChosenCountry(selected))}
                            styles={chartStyles}
                            isSearchable={true}
                        />
                    </div>
                    <div className={'aq-select'}>
                        <Select
                            id="aq-location"
                            name="aq-location"
                            value={chosenLocation}
                            options={locationsData?.results?.map((data: any) => ({
                                value: data, label: data.name
                            }))}
                            onChange={(selected) => dispatch(setChosenLocation(selected))}
                            styles={chartStyles}
                            isSearchable={true}
                        />
                    </div>
                </div>
                <div className={'aq-range-control'}>
                    <label className={'aq-select'}>
                        <Select
                            id="aq-year"
                            name="aq-year"
                            value={chosenYear}
                            options={getYears()}
                            onChange={(selected) => dispatch(setChosenYear(selected))}
                            styles={chartStyles}
                            isSearchable={true}
                        />
                    </label>
                    <label className={'aq-select'}>
                        <Select
                            id="aq-month"
                            name="aq-month"
                            value={chosenMonth}
                            options={getMonths()}
                            onChange={(selected) => dispatch(setChosenMonth(selected))}
                            styles={chartStyles}
                            isSearchable={true}
                        />
                    </label>
                </div>
            </header>
            <AirQualityChart/>
        </section>
    );
};