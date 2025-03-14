import {motion, useAnimation} from 'framer-motion';
import {LegacyRef, useEffect} from "react";

type MotionWrapperProps = {
    children: JSX.Element;
    motionRef: LegacyRef<HTMLDivElement> | undefined;
    inView: boolean;
    initialY: number;
    onYZero?: (isYZero: boolean) => void;
}

export const MotionWrapper = ({
                                  children,
                                  motionRef,
                                  inView,
                                  initialY,
                                  onYZero,
                                  ...props
                              }: MotionWrapperProps) => {
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 }).then(() => {
                if (onYZero) onYZero(true);
            });
        } else {
            controls.start({ opacity: 0, y: initialY });
            if (onYZero) onYZero(false);
        }
    }, [inView, controls, initialY, onYZero]);

    return (
        <motion.div
            ref={motionRef}
            initial={{ opacity: 0, y: initialY }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={''}
            {...props}>
            {children}
        </motion.div>
    );
};