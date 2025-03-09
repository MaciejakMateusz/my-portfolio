import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../../locales/LanguageSwitcher.tsx";
import {useActiveNavigation} from "../../hooks/useActiveNavigation.ts";

export const NavBar = ({
                           startRef,
                           techStackRef,
                           projectsRef,
                           activityRef,
                           careerRef,
                           aboutRef,
                           contactRef
                       }: any) => {
    const {t} = useTranslation();
    const {activeBtn, handleScrollTo} = useActiveNavigation({
        start: startRef,
        techStack: techStackRef,
        projects: projectsRef,
        activity: activityRef,
        career: careerRef,
        about: aboutRef,
        contact: contactRef,
    });

    return (
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
        </nav>
    );
}