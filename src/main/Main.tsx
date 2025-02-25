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

export const Main = () => {

    return (
        <>
            <NavBar/>
            <Start/>
            <Skills/>
            <Projects/>
            <Activity/>
            <Career/>
            <About/>
            <Books/>
            <Contact/>
            <Footer/>
        </>
    );
}