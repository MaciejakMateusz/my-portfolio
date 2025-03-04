import {CalendarTooltipProps, ResponsiveCalendar} from '@nivo/calendar'
import {useEffect} from "react";
import {fetchContributions} from "../../slices/contributionsSlice.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {ActivityCalendarLegend} from "./ActivityCalendarLegend.tsx";
import {ActivityCalendarTooltip} from "./ActivityCalendarTooltip.tsx";

interface ActivityCalendarProps {
    year: number
}

export const ActivityCalendar = ({year}: ActivityCalendarProps) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {data, isLoading, error} = useSelector<any, any>(state => state.contributions.contributions);

    useEffect(() => {
        dispatch(fetchContributions({
            yearBegin: new Date(year, 0, 1),
            yearEnd: new Date(year, 11, 31)
        }));
    }, [year]);

    return (
        <div className={'chart-box'}>
            {error && <span className={'server-down-msg'}>{t('restApiDown')}</span>}
            <div className={'calendar-chart-container'}>
                <ResponsiveCalendar
                    data={data}
                    from={`${year}-01-01`}
                    to={`${year}-12-31`}
                    emptyColor={'#081B2A'}
                    colors={['#553A00', '#7A5400', '#CB8B02', '#FFB000']}
                    margin={{top: 25, right: 70, bottom: 0, left: 78}}
                    yearSpacing={40}
                    monthBorderColor={'#0E0E0E'}
                    dayBorderWidth={4}
                    daySpacing={1}
                    dayBorderColor={'#0E0E0E'}
                    yearLegend={() => ''}
                    monthLegend={(_, month) => {
                        const monthNames = [
                            t('januaryShort'), t('februaryShort'), t('marchShort'), t('aprilShort'),
                            t('mayShort'), t('juneShort'), t('julyShort'), t('augustShort'),
                            t('septemberShort'), t('octoberShort'), t('novemberShort'), t('decemberShort')
                        ];
                        return monthNames[month];
                    }}
                    tooltip={(datum: CalendarTooltipProps) => <ActivityCalendarTooltip datum={datum}/>}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'row',
                            translateY: 36,
                            itemCount: 4,
                            itemWidth: 42,
                            itemHeight: 36,
                            itemsSpacing: 14,
                            itemDirection: 'right-to-left'
                        }
                    ]}
                    theme={{
                        text: {
                            fill: '#F9F9F9',
                            fontSize: 16,
                            fontFamily: "Inter, serif"
                        }
                    }}
                />
                <ActivityCalendarLegend/>
                {isLoading && <div className={'loader'}/>}
            </div>
        </div>
    );
}