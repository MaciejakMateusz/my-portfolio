import {motion} from "framer-motion";
import {useRef} from "react";
import {useTechnologies} from "../../hooks/useTechnologies.ts";

export const TechsInfiniteScrollMobile = () => {
    const containerRef = useRef(null);
    const technologies = useTechnologies();
    const repeated = [...technologies, ...technologies];

    return (
        <div className={'scroll-wrapper-mobile'}>
            <div
                ref={containerRef}
                className="scroll-container-mobile">
                <motion.div
                    className="scroll-content-mobile"
                    animate={{x: [0, -100 * technologies.length]}}
                    transition={{
                        ease: "linear",
                        duration: 200,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}>
                    {repeated.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </motion.div>
                <div className="gradient-left"></div>
                <div className="gradient-right"></div>
            </div>
        </div>
    );
};
