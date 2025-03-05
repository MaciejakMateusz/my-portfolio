export const ActivityCalendarLegend = () => {
    return (
        <div className={'calendar-chart-legend'}>
            <span className={'calendar-chart-legend-label'}>Więcej</span>
            <div className={'calendar-day-cell'} style={{background: '#FFB000'}}/>
            <div className={'calendar-day-cell'} style={{background: '#CB8B02'}}/>
            <div className={'calendar-day-cell'} style={{background: '#7A5400'}}/>
            <div className={'calendar-day-cell'} style={{background: '#553A00'}}/>
            <div className={'calendar-day-cell'} style={{background: '#081B2A'}}/>
            <span className={'calendar-chart-legend-label'}>Mniej</span>
        </div>
    );
}