import {Start} from "./landing/Start.tsx";
import {TechStack} from "./tech-stack/TechStack.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Activity} from "./activity/Activity.tsx";
import {Career} from "./career/Career.tsx";
import {About} from "./about/About.tsx";
import {Books} from "./books/Books.tsx";
import {Contact} from "./contact/Contact.tsx";
import {Footer} from "./footer/Footer.tsx";
import {useRef} from "react";
import 'react-multi-carousel/lib/styles.css';
import {NavController} from "./navigation/NavController.tsx";

export const Main = () => {
    const startRef = useRef();
    const techStackRef = useRef();
    const projectsRef = useRef();
    const activityRef = useRef();
    const careerRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    return (
        <>
            <NavController startRef={startRef}
                           techStackRef={techStackRef}
                           projectsRef={projectsRef}
                           activityRef={activityRef}
                           careerRef={careerRef}
                           aboutRef={aboutRef}
                           contactRef={contactRef}/>
            <Start ref={startRef} projectsRef={projectsRef}/>
            <TechStack ref={techStackRef}/>
            <Projects ref={projectsRef}/>
            <Activity ref={activityRef}/>
            <Career ref={careerRef}/>
            <About ref={aboutRef}/>
            <Books/>
            <Contact ref={contactRef}/>
            <Footer/>
        </>
    );
}