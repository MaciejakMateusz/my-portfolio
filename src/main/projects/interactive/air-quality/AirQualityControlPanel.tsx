import Select from "react-select";
import {
    fetchAQCountries,
    fetchAQLocations,
    setChosenCountry,
    setChosenLocation,
    setChosenMonth,
    setChosenYear
} from "../../../../slices/airQualitySlice.ts";
import {secondarySelect} from "../../../../styles/selectStyles.ts";
import {getMonth} from "../../../../util/util.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const AirQualityControlPanel = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {chosenCountry, chosenLocation, chosenYear, chosenMonth} = useSelector((state: any) => state.airQuality.view);
    const {data: countriesData, isLoading} = useSelector((state: any) => state.airQuality.fetchCountries);
    const {data: locationsData} = useSelector((state: any) => state.airQuality.fetchLocations);

    const getYears = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({length: currentYear - 1979}, (_, index) => ({
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
        <>
            <header className={'aq-control-panel'}>
                <div className={'aq-locality-controls'}>
                    <div className={'aq-select'}>
                        <label className={'custom-select-label'}>
                            {t('country')}:
                            <Select id="aq-country"
                                    name="aq-country"
                                    value={chosenCountry}
                                    options={countriesData?.results?.map((data: any) => ({
                                        value: data.id, label: data.name
                                    }))}
                                    onChange={(selected) => dispatch(setChosenCountry(selected))}
                                    styles={secondarySelect}
                                    isSearchable={true}
                            />
                        </label>
                    </div>
                    <div className={'aq-select'}>
                        <label className={'custom-select-label'}>
                            {t('location')}:
                            <Select
                                id="aq-location"
                                name="aq-location"
                                value={chosenLocation}
                                options={locationsData?.results?.map((data: any) => ({
                                    value: data, label: data.name
                                }))}
                                onChange={(selected) => dispatch(setChosenLocation(selected))}
                                styles={secondarySelect}
                                isSearchable={true}
                            />
                        </label>
                    </div>
                </div>
                <div className={'aq-range-control'}>
                    <div className={'aq-select'}>
                        <label className={'custom-select-label'}>
                            {t('date')}:
                            <Select
                                id="aq-year"
                                name="aq-year"
                                value={chosenYear}
                                options={getYears()}
                                onChange={(selected) => dispatch(setChosenYear(selected))}
                                styles={secondarySelect}
                                isSearchable={true}
                            />                        </label>
                    </div>
                    <div className={'aq-select'}>
                            <Select
                                id="aq-month"
                                name="aq-month"
                                value={chosenMonth}
                                options={getMonths()}
                                onChange={(selected) => dispatch(setChosenMonth(selected))}
                                styles={secondarySelect}
                                isSearchable={true}
                            />
                    </div>
                </div>
            </header>
            {isLoading ? <div className="loader"/> : <></>}
        </>
    );
}