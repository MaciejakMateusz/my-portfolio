import {useEffect, useState} from "react";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.ts";

export const MobileHamburger = ({
                           startRef,
                           techStackRef,
                           projectsRef,
                           activityRef,
                           careerRef,
                           aboutRef,
                           booksRef,
                           contactRef
                       }: any) => {
    const [activeBtn, setActiveBtn] = useState('start');
    const [isExpanded, setIsExpanded] = useState(false);
    const isWideScreen = window.innerWidth > 1000;
    const intersectionOptions = {
        rootMargin: isWideScreen ? '0px' : '0px',
        threshold: isWideScreen ? 0.1 : 0.1
    };

    const startVisible = useIntersectionObserver(startRef, intersectionOptions);
    const techStackVisible = useIntersectionObserver(techStackRef, intersectionOptions);
    const projectsVisible = useIntersectionObserver(projectsRef, intersectionOptions);
    const activityVisible = useIntersectionObserver(activityRef, intersectionOptions);
    const careerVisible = useIntersectionObserver(careerRef, intersectionOptions);
    const aboutVisible = useIntersectionObserver(aboutRef, intersectionOptions);
    const booksVisible = useIntersectionObserver(booksRef, intersectionOptions);
    const contactVisible = useIntersectionObserver(contactRef, intersectionOptions);

    useEffect(() => {
        if (startVisible) setActiveBtn('start');
         else if (techStackVisible) setActiveBtn('techStack');
         else if (projectsVisible) setActiveBtn('projects');
         else if (activityVisible) setActiveBtn('activity');
         else if (careerVisible) setActiveBtn('career');
         else if (aboutVisible) setActiveBtn('about');
         else if (booksVisible) setActiveBtn('books');
         else if (contactVisible) setActiveBtn('contact');
    }, [techStackVisible, projectsVisible, activityVisible, careerVisible, aboutVisible, booksVisible, contactVisible]);

    return (
        <button className="hamburger" onClick={() => setIsExpanded(!isExpanded)}>
            <div>
                <div className={'hamburger-slice'}/>
                <div className={'hamburger-slice'}/>
                <div className={'hamburger-slice'}/>
            </div>
            {isExpanded && 'expanded'}
        </button>
    );
}