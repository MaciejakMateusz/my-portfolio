import { useState, useEffect } from "react";
import {useIntersectionObserver} from "./useIntersectionObserver.ts";
import {NavRefs} from "../types/NavRefs.ts";

type UseActiveNavigationProps = {
    navRefs: NavRefs;
}

export const useActiveNavigation = ({navRefs}: UseActiveNavigationProps) => {
    const isWideScreen = window.innerWidth > 1000;
    const intersectionOptions = {
        rootMargin: "0px",
        threshold: isWideScreen ? 0.1 : 0.1,
    };

    const startVisible = useIntersectionObserver(navRefs.start, intersectionOptions);
    const techStackVisible = useIntersectionObserver(navRefs.techStack, intersectionOptions);
    const projectsVisible = useIntersectionObserver(navRefs.projects, intersectionOptions);
    const activityVisible = useIntersectionObserver(navRefs.activity, intersectionOptions);
    const careerVisible = useIntersectionObserver(navRefs.career, intersectionOptions);
    const aboutVisible = useIntersectionObserver(navRefs.about, intersectionOptions);
    const contactVisible = useIntersectionObserver(navRefs.contact, intersectionOptions);

    const [activeBtn, setActiveBtn] = useState("start");

    useEffect(() => {
        if (startVisible) setActiveBtn("start");
        else if (techStackVisible) setActiveBtn("techStack");
        else if (projectsVisible) setActiveBtn("projects");
        else if (activityVisible) setActiveBtn("activity");
        else if (careerVisible) setActiveBtn("career");
        else if (aboutVisible) setActiveBtn("about");
        else if (contactVisible) setActiveBtn("contact");
    }, [
        startVisible,
        techStackVisible,
        projectsVisible,
        activityVisible,
        careerVisible,
        aboutVisible,
        contactVisible,
    ]);

    const handleScrollTo = (ref: any, offset: number, btnName: string) => {
        setActiveBtn(btnName);
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop + offset,
                behavior: "smooth",
            });
        }
    };

    return { activeBtn, handleScrollTo, setActiveBtn };
};