import {NavBar} from "./navigation/NavBar.tsx";
import {Start} from "./landing/Start.tsx";
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Activity} from "./activity/Activity.tsx";
import {Career} from "./career/Career.tsx";
import {About} from "./about/About.tsx";
import {Books} from "./books/Books.tsx";
import {Contact} from "./contact/Contact.tsx";
import {Footer} from "./footer/Footer.tsx";
import {useRef} from "react";
import 'react-multi-carousel/lib/styles.css';

export const Main = () => {
    const startRef = useRef();
    const techStack = useRef();
    const projectsRef = useRef();
    const activityRef = useRef();
    const careerRef = useRef();
    const aboutRef = useRef();
    const booksRef = useRef();
    const contactRef = useRef();

    return (
        <>
            <NavBar startRef={startRef}
                    techStackRef={techStack}
                    projectsRef={projectsRef}
                    activityRef={activityRef}
                    careerRef={careerRef}
                    aboutRef={aboutRef}
                    booksRef={booksRef}
                    contactRef={contactRef}/>
            <Start ref={startRef} projectsRef={projectsRef}/>
            <Skills ref={techStack}/>
            <Projects ref={projectsRef}/>
            <Activity ref={activityRef}/>
            <Career ref={careerRef}/>
            <About ref={aboutRef}/>
            <Books ref={booksRef}/>
            <Contact ref={contactRef}/>
            <Footer/>
        </>
    );
}