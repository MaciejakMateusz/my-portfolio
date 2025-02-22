import {NavBar} from "./navigation/NavBar.tsx";
import {Start} from "./landing/Start.tsx";
import {Skills} from "./skills/Skills.tsx";

export const Main = () => {

    return (
        <>
            <NavBar/>
            <Start/>
            <Skills/>
        </>
    );
}