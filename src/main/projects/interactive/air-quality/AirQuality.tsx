import {AirQualityChart} from "./AirQualityChart.tsx";
import Select from "react-select";
import {chartStyles} from "../../../../styles/styles.ts";
import 'react-datepicker/dist/react-datepicker.css';
import {YearSelect} from "../../../../types/YearSelect.ts";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {
    fetchAQCountries,
    fetchAQLocations,
    setChosenCountry,
    setChosenLocation,
    setChosenYear
} from "../../../../slices/airQualitySlice.ts";
import {useEffect} from "react";

export const AirQuality = () => {
    const {chosenCountry, chosenLocation, chosenYear} = useSelector((state: any) => state.airQuality.view);
    const {data: countriesData} = useSelector((state: any) => state.airQuality.fetchCountries);
    const {data: locationsData} = useSelector((state: any) => state.airQuality.fetchLocations);
    const dispatch = useAppDispatch();
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        let years: YearSelect[] = [];
        for(let y = 1980; y <= currentYear; y++) {
            years.push({value: y, label: y});
        }
        return years;
    }

    useEffect(() => {
        dispatch(fetchAQCountries());
    }, []);

    useEffect(() => {
        dispatch(fetchAQLocations(chosenCountry.value));
    }, [chosenCountry]);

    return (
        <section className={'aq-container'}>
            <header className={'aq-control-panel'}>
                <div className={'aq-locality-controls'}>
                    <div className={'aq-select'}>
                        <Select
                            id="aq-country"
                            name="aq-country"
                            value={chosenCountry}
                            options={countriesData?.results?.map((data: any) => ({value: data.id, label: data.name}))}
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
                            options={locationsData?.results?.map((data: any) => ({value: data.id, label: data.name}))}
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
                </div>
            </header>
            <AirQualityChart/>
        </section>
    );
}