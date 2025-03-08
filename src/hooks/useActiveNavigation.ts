import { useState, useEffect } from "react";
import {useIntersectionObserver} from "./useIntersectionObserver.ts";

export const useActiveNavigation = (refs: {
    start: any;
    techStack: any;
    projects: any;
    activity: any;
    career: any;
    about: any;
    contact: any;
}) => {
    const isWideScreen = window.innerWidth > 1000;
    const intersectionOptions = {
        rootMargin: "0px",
        threshold: isWideScreen ? 0.1 : 0.1,
    };

    const startVisible = useIntersectionObserver(refs.start, intersectionOptions);
    const techStackVisible = useIntersectionObserver(refs.techStack, intersectionOptions);
    const projectsVisible = useIntersectionObserver(refs.projects, intersectionOptions);
    const activityVisible = useIntersectionObserver(refs.activity, intersectionOptions);
    const careerVisible = useIntersectionObserver(refs.career, intersectionOptions);
    const aboutVisible = useIntersectionObserver(refs.about, intersectionOptions);
    const contactVisible = useIntersectionObserver(refs.contact, intersectionOptions);

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