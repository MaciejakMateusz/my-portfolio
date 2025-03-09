import React from 'react';
import {SliceTooltipProps} from '@nivo/line';

export const CustomSliceTooltip: React.FC<SliceTooltipProps> = ({slice}) => {
    return (
        <div className={'chart-tooltip'}>
            {slice.points.map((point) => (
                <div key={point.id} className={'activity-tooltip-label'}>
                    <div className={'calendar-day-cell'}
                         style={{
                             background: point.serieColor,
                             width: '12px',
                             height: '12px',
                             borderRadius: '50%',
                             marginRight: '8px',
                         }}/>
                    <span>{point.serieId}:</span>
                    <span className={'chart-tooltip-index'}>{point.data.yFormatted}</span>
                </div>
            ))}
        </div>
    );
};
