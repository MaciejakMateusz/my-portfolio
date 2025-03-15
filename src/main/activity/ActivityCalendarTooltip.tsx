import {useFormattedDate} from "../../hooks/useFormattedDate.ts";
import {CalendarTooltipProps} from "@nivo/calendar";
import {useTranslation} from "react-i18next";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

type ActivityCalendarTooltipProps = {
    datum: CalendarTooltipProps;
};

let lastPointerEvent: { clientX: number; clientY: number } | null = null;

if (typeof window !== 'undefined') {
    window.addEventListener('pointerdown', (e: PointerEvent) => {
        lastPointerEvent = {clientX: e.clientX, clientY: e.clientY};
    });
    window.addEventListener('pointermove', (e: PointerEvent) => {
        lastPointerEvent = {clientX: e.clientX, clientY: e.clientY};
    });
    window.addEventListener('touchstart', (e: TouchEvent) => {
        const touch = e.touches[0];
        if (touch) {
            lastPointerEvent = {clientX: touch.clientX, clientY: touch.clientY};
        }
    });
}

export const ActivityCalendarTooltip = ({datum}: ActivityCalendarTooltipProps) => {
    const {formatDate} = useFormattedDate();
    const {t} = useTranslation();
    const container = document.getElementById('chart-box-activity');

    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

    const updatePosition = (clientX: number, clientY: number) => {
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

    useEffect(() => {
        if (container && lastPointerEvent) {
            updatePosition(lastPointerEvent.clientX, lastPointerEvent.clientY);
        }
    }, [datum, container]);

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType !== "touch") {
                updatePosition(e.clientX, e.clientY);
            }
        };

        window.addEventListener('pointermove', handlePointerMove);
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, [container]);

    if (!container || !position) return null;

    return createPortal(
        <motion.div
            className={'chart-tooltip'}
            style={{position: 'absolute'}}
            initial={{top: position.top, left: position.left}}
            animate={{top: position.top, left: position.left}}
            transition={{type: 'spring', stiffness: 200, damping: 15}}>
            <p className={'chart-tooltip-index'}>{formatDate(datum.day)}:</p>
            <div className={'activity-tooltip-label'}>
                <div className={'calendar-day-cell'} style={{background: datum.color}}/>
                <span>{t('commitsAmount')}</span>
                <span>{datum.value}</span>
            </div>
        </motion.div>,
        container
    );
};