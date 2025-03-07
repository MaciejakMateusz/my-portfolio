import {useTranslation} from "react-i18next";

export const ActivityCalendarLegend = () => {
    const {t} = useTranslation();
    return (
        <div className={'calendar-chart-legend'}>
            <span className={'calendar-chart-legend-label'}>{t('more')}</span>
            <div className={'calendar-day-cell'} style={{background: '#FFB000'}}/>
            <div className={'calendar-day-cell'} style={{background: '#CB8B02'}}/>
            <div className={'calendar-day-cell'} style={{background: '#7A5400'}}/>
            <div className={'calendar-day-cell'} style={{background: '#553A00'}}/>
            <div className={'calendar-day-cell'} style={{background: '#141414'}}/>
            <span className={'calendar-chart-legend-label'}>{t('less')}</span>
        </div>
    );
}