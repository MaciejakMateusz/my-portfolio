import {ReactSVG} from "react-svg";
import {LanguageSwitcherMobile} from "../../locales/LanguageSwitcherMobile.tsx";
import {useTranslation} from "react-i18next";
import {useActiveNavigation} from "../../hooks/useActiveNavigation.ts";

export const MobileSideMenu = ({
                                   startRef,
                                   techStackRef,
                                   projectsRef,
                                   activityRef,
                                   careerRef,
                                   aboutRef,
                                   contactRef,
                                   setIsExpanded
                               }: any) => {
    const {t} = useTranslation();
    const { activeBtn, handleScrollTo } = useActiveNavigation({
        start: startRef,
        techStack: techStackRef,
        projects: projectsRef,
        activity: activityRef,
        career: careerRef,
        about: aboutRef,
        contact: contactRef,
    });

    return (
        <div className={'mobile-side-menu-wrapper'}>
            <ReactSVG src={'/close-icon.svg'} className={'close-menu-icon'} onClick={() => setIsExpanded(false)}/>
            <LanguageSwitcherMobile sideMenu={true}/>
            <nav className={'side-menu-nav-btns'}>
                <div className={`side-menu-nav-btn ${activeBtn === 'start' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(startRef, 0, 'start')}>
                    <span className={'nav-text-'}>Start</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'techStack' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(techStackRef, -50, 'techStack')}>
                    <span className={'nav-text'}>{t('techStack')}</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'projects' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(projectsRef, -100, 'projects')}>
                    <span className={'nav-text'}>{t('projects')}</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'activity' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(activityRef, -100, 'activity')}>
                    <span className={'nav-text'}>{t('activity')}</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'career' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(careerRef, -30, 'career')}>
                    <span className={'nav-text'}>{t('career')}</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'about' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(aboutRef, -30, 'about')}>
                    <span className={'nav-text'}>{t('about')}</span>
                </div>
                <div className={`side-menu-nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                      onClick={() => handleScrollTo(contactRef, -30, 'contact')}>
                    <span className={'nav-text'}>{t('contact')}</span>
                </div>
            </nav>
        </div>
    );
}