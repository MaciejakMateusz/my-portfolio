import {motion} from 'framer-motion';
import {LegacyRef} from "react";

type MotionWrapperProps = {
    children: JSX.Element;
    motionRef: LegacyRef<HTMLDivElement> | undefined;
    inView: boolean;
    className?: string;
    initialY: number;
}

export const MotionWrapper = ({children, motionRef, inView, initialY, className, ...props}: MotionWrapperProps) => {
    return (
        <motion.div
            ref={motionRef}
            initial={{opacity: 0, y: initialY}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className={className}
            {...props}>
            {children}
        </motion.div>
    );
};