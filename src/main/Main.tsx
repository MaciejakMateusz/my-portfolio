import {NavBar} from "./navigation/NavBar.tsx";
import {Start} from "./landing/Start.tsx";
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Activity} from "./activity/Activity.tsx";
import {Career} from "./career/Career.tsx";
import {About} from "./about/About.tsx";

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
        </>
    );
}