import {motion} from "framer-motion";
import {useRef} from "react";

const skills = [
    "Spring Boot", "Spring Data","Spring Security", "Hibernate", "JWT", "Java", "JavaScript",
    "TypeScript", "React", "Redux", "SQL", "HTML", "CSS", "Selenium", "JUnit",
    "Mockito", "Docker", "WebSocket", "REST"];
const repeatedSkills = [...skills, ...skills, ...skills];

export const SkillsInfiniteScroll = () => {
    const containerRef = useRef(null);

    return (
        <div className={'scroll-wrapper'}>
            <div
                ref={containerRef}
                className="scroll-container">
                <motion.div
                    className="scroll-content"
                    animate={{y: [0, -100 * skills.length]}}
                    transition={{
                        ease: "linear",
                        duration: 40,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}>
                    {repeatedSkills.map((skill, index) => (
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
