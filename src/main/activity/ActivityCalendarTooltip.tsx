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
        const handleMove = (e: MouseEvent | TouchEvent | PointerEvent) => {
            const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

            if (container) {
                const rect = container.getBoundingClientRect();
                const relativeX = clientX - rect.left;
                const relativeY = clientY - rect.top;
                const tooltipWidth = 220;
                let newLeft = relativeX + 10;

                if (newLeft + tooltipWidth > rect.width) {
                    newLeft = rect.width - tooltipWidth;
                }

                setPosition({top: relativeY - 100, left: newLeft});
            }
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('touchmove', handleMove);

        return () => {
            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [container]);

    if (!container || !position) return null;

    return createPortal(
        <div className="chart-tooltip"
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