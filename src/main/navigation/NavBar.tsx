import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.ts";

export const NavBar = ({
                           startRef,
                           skillsRef,
                           projectsRef,
                           activityRef,
                           careerRef,
                           aboutRef,
                           booksRef,
                           contactRef
                       }: any) => {
    const {t} = useTranslation();
    const [activeBtn, setActiveBtn] = useState('start');
    const isWideScreen = window.innerWidth > 1000;
    const intersectionOptions = {
        rootMargin: isWideScreen ? '0px' : '0px',
        threshold: isWideScreen ? 0.1 : 0.1
    };

    const startVisible = useIntersectionObserver(startRef, intersectionOptions);
    const skillsVisible = useIntersectionObserver(skillsRef, intersectionOptions);
    const projectsVisible = useIntersectionObserver(projectsRef, intersectionOptions);
    const activityVisible = useIntersectionObserver(activityRef, intersectionOptions);
    const careerVisible = useIntersectionObserver(careerRef, intersectionOptions);
    const aboutVisible = useIntersectionObserver(aboutRef, intersectionOptions);
    const booksVisible = useIntersectionObserver(booksRef, intersectionOptions);
    const contactVisible = useIntersectionObserver(contactRef, intersectionOptions);

    useEffect(() => {
        if (startVisible) setActiveBtn('start');
         else if (skillsVisible) setActiveBtn('skills');
         else if (projectsVisible) setActiveBtn('projects');
         else if (activityVisible) setActiveBtn('activity');
         else if (careerVisible) setActiveBtn('career');
         else if (aboutVisible) setActiveBtn('about');
         else if (booksVisible) setActiveBtn('books');
         else if (contactVisible) setActiveBtn('contact');
    }, [skillsVisible, projectsVisible, activityVisible, careerVisible, aboutVisible, booksVisible, contactVisible]);

    const handleScrollTo = (ref: any, offset: number, btnName: string) => {
        setActiveBtn(btnName);
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="nav-header">
            <div className={'nav-buttons-container'}>
                <div className={'nav-buttons-wrapper'}>
                    <span className={`nav-btn ${activeBtn === 'start' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(startRef, 0, 'start')}>
                        <span className={'nav-text'}>Start</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'projects' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(projectsRef, -100, 'projects')}>
                        <span className={'nav-text'}>{t('projects')}</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'activity' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(activityRef, -100, 'activity')}>
                        <span className={'nav-text'}>{t('activity')}</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'career' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(careerRef, -30, 'career')}>
                        <span className={'nav-text'}>{t('career')}</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'about' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(aboutRef, -30, 'about')}>
                        <span className={'nav-text'}>{t('about')}</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'books' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(booksRef, -100, 'books')}>
                        <span className={'nav-text'}>{t('books')}</span>
                    </span>
                    <span className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(contactRef, -30, 'contact')}>
                        <span className={'nav-text'}>{t('contact')}</span>
                    </span>
                </div>
            </div>
        </nav>
    );
}