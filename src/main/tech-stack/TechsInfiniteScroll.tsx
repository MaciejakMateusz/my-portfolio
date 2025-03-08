import {motion} from "framer-motion";
import {useRef} from "react";
import {useTechnologies} from "../../hooks/useTechnologies.ts";

export const TechsInfiniteScroll = () => {
    const containerRef = useRef(null);
    const technologies = useTechnologies();
    const repeated = [...technologies, ...technologies];

    return (
        <div className={'scroll-wrapper'}>
            <div
                ref={containerRef}
                className="scroll-container">
                <motion.div
                    className="scroll-content"
                    animate={{y: [0, -100 * technologies.length]}}
                    transition={{
                        ease: "linear",
                        duration: 160,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}>
                    {repeated.map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </motion.div>
                <div className="gradient-top"></div>
                <div className="gradient-bottom"></div>
            </div>
        </div>
    );
};
