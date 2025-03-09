import {MutableRefObject, useEffect, useState} from "react";
import {MobileSideMenu} from "./MobileSideMenu.tsx";
import {NavBar} from "./NavBar.tsx";
import {Hamburger} from "./Hamburger.tsx";

type NavControllerProps = {
    startRef: MutableRefObject<any>;
    techStackRef: MutableRefObject<any>;
    projectsRef: MutableRefObject<any>;
    activityRef: MutableRefObject<any>;
    careerRef: MutableRefObject<any>;
    aboutRef: MutableRefObject<any>;
    contactRef: MutableRefObject<any>;
}

export const NavController = ({
                                  startRef,
                                  techStackRef,
                                  projectsRef,
                                  activityRef,
                                  careerRef,
                                  aboutRef,
                                  contactRef
                              }: NavControllerProps) => {
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
                <NavBar startRef={startRef}
                        techStackRef={techStackRef}
                        projectsRef={projectsRef}
                        activityRef={activityRef}
                        careerRef={careerRef}
                        aboutRef={aboutRef}
                        contactRef={contactRef}/>}
            <MobileSideMenu startRef={startRef}
                            techStackRef={techStackRef}
                            projectsRef={projectsRef}
                            activityRef={activityRef}
                            careerRef={careerRef}
                            aboutRef={aboutRef}
                            contactRef={contactRef}
                            expandHandler={setIsExpanded} isExpanded={isExpanded}/>
        </>
    );
}