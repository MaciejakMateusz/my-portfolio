import {useFormattedDate} from "../../hooks/useFormattedDate.ts";
import {CalendarTooltipProps} from "@nivo/calendar";
import {useTranslation} from "react-i18next";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";

type ActivityCalendarTooltipProps = {
    datum: CalendarTooltipProps;
};

export const ActivityCalendarTooltip = ({datum}: ActivityCalendarTooltipProps) => {
    const {formatDate} = useFormattedDate();
    const {t} = useTranslation();
    const container = document.getElementById('chart-box-activity');

    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (container) {
                const rect = container.getBoundingClientRect();
                const relativeX = e.clientX - rect.left;
                const relativeY = e.clientY - rect.top;
                const tooltipWidth = 220;
                let newLeft = relativeX + 10;

                if (newLeft + tooltipWidth > rect.width) {
                    newLeft = rect.width - tooltipWidth;
                }
                setPosition({top: relativeY - 100, left: newLeft});
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [container]);

    if (!container || !position) return null;

    return createPortal(
        <div
            className="chart-tooltip"
            style={{
                top: position.top,
                left: position.left,
                position: 'absolute'
            }}>
            <p className="chart-tooltip-index">{formatDate(datum.day)}:</p>
            <div className="activity-tooltip-label">
                <div className="calendar-day-cell" style={{background: datum.color}}/>
                <span>{t('commitsAmount')}</span>
                <span>{datum.value}</span>
            </div>
        </div>,
        container
    );
};