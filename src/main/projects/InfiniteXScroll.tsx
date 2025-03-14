import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion';
import {useProjectCards} from "../../hooks/useProjectCards.tsx";

type InfiniteXScrollProps = {
    children: JSX.Element[];
}

export const InfiniteXScroll = forwardRef(({children}: InfiniteXScrollProps, ref: any) => {
    const cards = useProjectCards();
    const repeatedCards = [...children, ...children, ...children];
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const speed = 1;
    const [segmentWidth, setSegmentWidth] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startPosition = useRef<number | null>(null);

    const handlePointerDown = (event: React.PointerEvent) => {
        startPosition.current = event.clientX;
    };

    const handlePointerUp = (event: React.PointerEvent) => {
        const endPosition = event.clientX;
        if (startPosition.current !== null) {
            const movementThreshold = 5;
            const movement = Math.abs(endPosition - startPosition.current);

            if (movement < movementThreshold) {
                setIsPaused(true);
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                timeoutRef.current = setTimeout(() => {
                    setIsPaused(false);
                }, 3000);
            }
        }
        startPosition.current = null;
    };

    const handleDragStart = () => setIsPaused(true);
    const handleDragEnd = () => setIsPaused(false);
    const handleHoverStart = () => setIsPaused(true);
    const handleHoverEnd = () => setIsPaused(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const totalWidth = containerRef.current.scrollWidth;
        setSegmentWidth(totalWidth / 3);
    }, [cards]);

    useEffect(() => {
        let frame: number;
        const loop = () => {
            if (!isPaused) {
                const currentX = x.get();
                let newX = currentX - speed;
                if (segmentWidth > 0 && Math.abs(newX) >= segmentWidth) {
                    newX += segmentWidth;
                }
                x.set(newX);
            }
            frame = requestAnimationFrame(loop);
        };
        frame = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frame);
    }, [isPaused, segmentWidth, x]);

    useMotionValueEvent(x, 'change', (latestX) => {
        if (!segmentWidth) return;

        let newX = latestX;
        while (newX <= -segmentWidth) {
            newX += segmentWidth;
        }
        while (newX >= 0) {
            newX -= segmentWidth;
        }

        if (newX !== latestX) {
            x.set(newX);
        }
    });

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="infinite-x-container" ref={ref}>
            <motion.div
                className="infinite-x-wrapper"
                ref={containerRef}
                style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    x: x,
                    cursor: 'grab',
                }}
                drag="x"
                dragElastic={0}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}>
                {repeatedCards.map((card, index) => (
                    <div className={'infinite-x-card-wrapper'} key={index}>
                        {card}
                    </div>
                ))}
            </motion.div>
        </div>
    );
});