import {NavBar} from "./navigation/NavBar.tsx";
import {Landing} from "./landing/Landing.tsx";
import {SocialButtons} from "./SocialButtons.tsx";

export const Main = () => {

    return (
        <>
            <SocialButtons/>
            <NavBar/>
            <Landing/>
        </>
    );
}