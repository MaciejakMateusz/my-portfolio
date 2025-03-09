import {ReactSVG} from "react-svg";
import {LanguageSwitcherMobile} from "../../locales/LanguageSwitcherMobile.tsx";
import {useTranslation} from "react-i18next";
import {useActiveNavigation} from "../../hooks/useActiveNavigation.ts";
import {NavRefs} from "../../types/NavRefs.ts";

type MobileSideMenuProps = {
    navRefs: NavRefs;
    expandHandler: Function;
    isExpanded: boolean;
}

export const MobileSideMenu = ({
                                   navRefs,
                                   expandHandler,
                                   isExpanded
                               }: MobileSideMenuProps) => {
    const {t} = useTranslation();
    const { activeBtn, handleScrollTo } = useActiveNavigation({navRefs});

    return (
        <nav className={`mobile-side-menu ${isExpanded ? 'expanded' : ''}`}>
            <div className={'mobile-side-menu-wrapper'}>
                <ReactSVG src={'/close-icon.svg'} className={'close-menu-icon'} onClick={() => expandHandler(false)}/>
                <LanguageSwitcherMobile sideMenu={true}/>
                <nav className={'side-menu-nav-btns'}>
                    <div className={`side-menu-nav-btn ${activeBtn === 'start' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.start, 0, 'start')}>
                        <span className={'nav-text-'}>Start</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'techStack' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.techStack, -50, 'techStack')}>
                        <span className={'nav-text'}>{t('techStack')}</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'projects' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.projects, -100, 'projects')}>
                        <span className={'nav-text'}>{t('projects')}</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'activity' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.activity, -100, 'activity')}>
                        <span className={'nav-text'}>{t('activity')}</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'career' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.career, -30, 'career')}>
                        <span className={'nav-text'}>{t('career')}</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'about' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.about, -30, 'about')}>
                        <span className={'nav-text'}>{t('about')}</span>
                    </div>
                    <div className={`side-menu-nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                         onClick={() => handleScrollTo(navRefs.contact, -30, 'contact')}>
                        <span className={'nav-text'}>{t('contact')}</span>
                    </div>
                </nav>
            </div>
        </nav>
    );
}