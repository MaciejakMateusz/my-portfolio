import {AirQualityChart} from "./AirQualityChart.tsx";
import Select from "react-select";
import {chartStyles} from "../../../../styles/styles.ts";
import DatePicker, {registerLocale} from "react-datepicker";
import {pl} from "date-fns/locale/pl";
import 'react-datepicker/dist/react-datepicker.css';
import {getLanguage} from "../../../../util/util.ts";
import {useEffect} from "react";

export const AirQuality = () => {

    useEffect(() => {
        if ('pl' === getLanguage()) {
            registerLocale('pl', pl);
        }
    }, []);

    return (
        <section className={'aq-container'}>
            <header className={'aq-control-panel'}>
                <div className={'aq-locality-controls'}>
                    <div className={'aq-select'}>
                        <Select
                            id="period-year"
                            name="period-year"
                            value={{value: 1, label: 'Polska'}}
                            options={[{value: 1, label: 'Polska'}]}
                            placeholder={'Kraj'}
                            onChange={(selected) => console.log(selected?.label)}
                            styles={chartStyles}
                            isSearchable={false}
                        />
                    </div>
                    <div className={'aq-select'}>
                        <Select
                            id="period-year"
                            name="period-year"
                            value={{value: 2, label: 'Katowice'}}
                            options={[{value: 2, label: 'Katowice'}]}
                            placeholder={'Lokacja'}
                            onChange={(selected) => console.log(selected?.label)}
                            styles={chartStyles}
                            isSearchable={false}
                        />
                    </div>
                </div>
                <div className={'aq-range-control'}>
                    <label className={'aq-select'}>
                        Data od:&nbsp;&nbsp;
                        <DatePicker selected={new Date()}
                                    onChange={(date) => console.log(date)}
                                    locale={getLanguage() === 'pl' ? 'pl' : 'en'}
                                    dateFormat="d MMMM yyyy"
                                    className="datepicker-custom-input"
                                    calendarClassName="datepicker-custom-calendar"
                                    popperClassName="datepicker-custom-popper"
                                    maxDate={new Date()}
                        />
                    </label>
                    <label className={'aq-select'}>
                        Data do:&nbsp;&nbsp;
                        <DatePicker selected={new Date()}
                                    onChange={(date) => console.log(date)}
                                    locale={getLanguage() === 'pl' ? 'pl' : 'en'}
                                    dateFormat="d MMMM yyyy"
                                    className="datepicker-custom-input"
                                    calendarClassName="datepicker-custom-calendar"
                                    popperClassName="datepicker-custom-popper"
                                    maxDate={new Date()}
                        />
                    </label>
                </div>
            </header>
            <AirQualityChart/>
        </section>
    );
}