import {useFormattedDate} from "../../hooks/useFormattedDate.ts";
import {CalendarTooltipProps} from "@nivo/calendar";
import {useTranslation} from "react-i18next";

type ActivityCalendarTooltipProps = {
    datum: CalendarTooltipProps;
}

export const ActivityCalendarTooltip = ({datum}: ActivityCalendarTooltipProps) => {
    const {formatDate} = useFormattedDate();
    const {t} = useTranslation();
    return (
        <div className={'chart-tooltip'}>
            <p className={'chart-tooltip-index'}>{formatDate(datum.day)}:</p>
            <div className={'activity-tooltip-label'}>
                <div className={'calendar-day-cell'} style={{background: datum.color}}/>
                <span>{t('commitsAmount')}</span>
                <span>{datum.value}</span>
            </div>
        </div>
    );
}