import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../../locales/LanguageSwitcher.tsx";
import {useActiveNavigation} from "../../hooks/useActiveNavigation.ts";
import {NavRefs} from "../../types/NavRefs.ts";

type NavBarProps = {
    navRefs: NavRefs
}

export const NavBar = ({navRefs}: NavBarProps) => {
    const {t} = useTranslation();
    const {activeBtn, handleScrollTo} = useActiveNavigation({navRefs});

    return (
        <nav className="nav-header">
            <div className={'nav-buttons-container'}>
                <div className={'nav-buttons-wrapper'}>
                            <span className={`nav-btn ${activeBtn === 'start' ? 'active' : ''}`}
                                  onClick={() => handleScrollTo(navRefs.start, 0, 'start')}>
                                <span className={'nav-text'}>Start</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'techStack' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.techStack, -50, 'techStack')}>
                                <span className={'nav-text'}>{t('techStack')}</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'projects' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.projects, -100, 'projects')}>
                                <span className={'nav-text'}>{t('projects')}</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'activity' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.activity, -100, 'activity')}>
                                <span className={'nav-text'}>{t('activity')}</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'career' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.career, -30, 'career')}>
                                <span className={'nav-text'}>{t('career')}</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'about' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.about, -30, 'about')}>
                                <span className={'nav-text'}>{t('about')}</span>
                            </span>
                    <span className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(navRefs.contact, -30, 'contact')}>
                                <span className={'nav-text'}>{t('contact')}</span>
                            </span>
                </div>
            </div>
            <LanguageSwitcher/>
        </nav>
    );
}