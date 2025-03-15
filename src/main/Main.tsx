import {Start} from "./start/Start.tsx";
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
import {NavRefs} from "../types/NavRefs.ts";

export const Main = () => {
    const navRefs: NavRefs = {
        start: useRef(),
        techStack: useRef(),
        projects: useRef(),
        activity: useRef(),
        career: useRef(),
        about: useRef(),
        contact: useRef()
    }

    return (
        <>
            <NavController navRefs={navRefs}/>
            <Start ref={navRefs.start} projectsRef={navRefs.projects}/>
            <TechStack ref={navRefs.techStack}/>
            <Projects ref={navRefs.projects}/>
            <Activity ref={navRefs.activity}/>
            <Career ref={navRefs.career}/>
            <About ref={navRefs.about}/>
            <Books/>
            <Contact ref={navRefs.contact}/>
            <Footer/>
        </>
    );
}