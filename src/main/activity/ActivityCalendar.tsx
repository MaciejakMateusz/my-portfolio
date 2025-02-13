import { ResponsiveCalendar } from '@nivo/calendar'
import {useEffect} from "react";
import {fetchContributions} from "../../slices/contributionsSlice.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {useSelector} from "react-redux";

export const ActivityCalendar = () => {
    const dispatch = useAppDispatch();
    const {data} = useSelector<any, any>(state => state.contributions.contributions);
    useEffect(() => {
        dispatch(fetchContributions({
            yearBegin: new Date(2024, 0, 1),
            yearEnd: new Date(2024, 11, 31)
        }));
    }, []);

    return (
        <ResponsiveCalendar
            data={data}
            from="2024-01-01"
            to="2024-12-31"
            emptyColor="#171A21"
            colors={['#593802', '#7E4E02', '#b87403', '#F59906']}
            margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
            yearSpacing={40}
            monthBorderColor="#0E1317"
            dayBorderWidth={4}
            dayBorderColor="#0E1317"
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
        />
    );
}