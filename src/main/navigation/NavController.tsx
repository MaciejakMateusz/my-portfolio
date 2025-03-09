import {useEffect, useState} from "react";
import {MobileSideMenu} from "./MobileSideMenu.tsx";
import {NavBar} from "./NavBar.tsx";
import {Hamburger} from "./Hamburger.tsx";
import {NavRefs} from "../../types/NavRefs.ts";

type NavControllerProps = {
    navRefs: NavRefs
}

export const NavController = ({navRefs}: NavControllerProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) setIsMobile(true);
            else setIsMobile(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isMobile ? <Hamburger expandHandler={setIsExpanded}/> :
                <NavBar navRefs={navRefs}/>}
            <MobileSideMenu navRefs={navRefs}
                            expandHandler={setIsExpanded}
                            isExpanded={isExpanded}/>
        </>
    );
}