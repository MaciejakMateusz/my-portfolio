import {CalendarTooltipProps, ResponsiveCalendar} from '@nivo/calendar'
import {useEffect, useState} from "react";
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
    const initialMargins = {top: 25, right: 70, bottom: 0, left: 78};
    const [margins, setMargins] = useState(initialMargins);
    const {data, isLoading, error} = useSelector<any, any>(state => state.contributions.contributions);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setMargins({top: 0, right: 24, bottom: 0, left: 24});
            } else {
                setMargins(initialMargins);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        dispatch(fetchContributions({
            yearBegin: new Date(year, 0, 1),
            yearEnd: new Date(year, 11, 31)
        }));
    }, [year]);

    return (
        <div className={'chart-box'}>
            {error && <span className={'server-down-msg'}>{t('restApiDown')}</span>}
            <div className={`calendar-chart-container ${window.innerWidth <= 1200 ? 'mobile' : ''}`}>
                <ResponsiveCalendar
                    data={data}
                    from={`${year}-01-01`}
                    to={`${year}-12-31`}
                    emptyColor={'#141414'}
                    colors={['#553A00', '#7A5400', '#CB8B02', '#FFB000']}
                    margin={margins}
                    yearSpacing={40}
                    monthBorderColor={'#0E0E0E'}
                    dayBorderWidth={4}
                    daySpacing={window.innerWidth <= 1200 ? 0 : 1}
                    dayBorderColor={'#0E0E0E'}
                    yearLegend={() => ''}
                    monthLegendOffset={18}
                    monthLegend={(_, month) => {
                        const monthNames = [
                            t('januaryShort'), t('februaryShort'), t('marchShort'), t('aprilShort'),
                            t('mayShort'), t('juneShort'), t('julyShort'), t('augustShort'),
                            t('septemberShort'), t('octoberShort'), t('novemberShort'), t('decemberShort')
                        ];
                        return monthNames[month];
                    }}
                    tooltip={(datum: CalendarTooltipProps) => <ActivityCalendarTooltip datum={datum}/>}
                    theme={{
                        text: {
                            fill: '#F9F9F9',
                            fontSize: 16,
                            fontFamily: "Inter, serif",
                            fontWeight: 300
                        }
                    }}
                />
                <ActivityCalendarLegend/>
                {isLoading && <div className={'loader'}/>}
            </div>
        </div>
    );
}