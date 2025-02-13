import {NavBar} from "./navigation/NavBar.tsx";
import {Landing} from "./landing/Landing.tsx";
import {SocialButtons} from "./SocialButtons.tsx";
import {Activity} from "./activity/Activity.tsx";

export const Main = () => {

    return (
        <>
            <SocialButtons/>
            <NavBar/>
            <Landing/>
            <Activity/>
        </>
    );
}