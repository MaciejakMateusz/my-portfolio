import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {LanguageSwitcher} from "../../locales/LanguageSwitcher.tsx";
import {MobileSideMenu} from "./MobileSideMenu.tsx";
import {useActiveNavigation} from "../../hooks/useActiveNavigation.ts";

export const NavBar = ({
                           startRef,
                           techStackRef,
                           projectsRef,
                           activityRef,
                           careerRef,
                           aboutRef,
                           booksRef,
                           contactRef
                       }: any) => {
    const {t} = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { activeBtn, handleScrollTo } = useActiveNavigation({
        start: startRef,
        techStack: techStackRef,
        projects: projectsRef,
        activity: activityRef,
        career: careerRef,
        about: aboutRef,
        contact: contactRef,
    });

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
            {isMobile ?
                <button className="hamburger" onClick={() => setIsExpanded(true)}>
                    <div>
                        <div className={'hamburger-slice'}/>
                        <div className={'hamburger-slice'}/>
                        <div className={'hamburger-slice'}/>
                    </div>
                </button> :
                <nav className="nav-header">
                    <div className={'nav-buttons-container'}>
                        <div className={'nav-buttons-wrapper'}>
                            <span className={`nav-btn ${activeBtn === 'start' ? 'active' : ''}`}
                                  onClick={() => handleScrollTo(startRef, 0, 'start')}>
                                <span className={'nav-text'}>Start</span>
                            </span>
                            <span className={`nav-btn ${activeBtn === 'techStack' ? 'active' : ''}`}
                                  onClick={() => handleScrollTo(techStackRef, -50, 'techStack')}>
                                <span className={'nav-text'}>{t('techStack')}</span>
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
                            <span className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                                  onClick={() => handleScrollTo(contactRef, -30, 'contact')}>
                                <span className={'nav-text'}>{t('contact')}</span>
                            </span>
                        </div>
                    </div>
                    <LanguageSwitcher/>
                </nav>}
            <nav className={`mobile-side-menu ${isExpanded ? 'expanded' : ''}`}>
                <MobileSideMenu startRef={startRef}
                                techStackRef={techStackRef}
                                projectsRef={projectsRef}
                                activityRef={activityRef}
                                careerRef={careerRef}
                                aboutRef={aboutRef}
                                booksRef={booksRef}
                                contactRef={contactRef}
                                setIsExpanded={setIsExpanded}/>
            </nav>
        </>
    );
}