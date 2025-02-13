import {useTranslation} from "react-i18next";

export const NavBar = () => {
    const {t} = useTranslation();

    return (
        <nav className="nav-header">
            <div className={'nav-buttons-container'}>
                <div className={'nav-buttons-wrapper'}>
                    <span className={`nav-btn active`}>
                        <span className={'nav-text'}>Home
                    </span>
                </span>
                    <span className={`nav-btn`}>
                        <span className={'nav-text'}>{t('activity')}
                    </span>
                </span>
                    <span className={`nav-btn`}>
                        <span className={'nav-text'}>{t('experience')}
                    </span>
                </span>
                    <span className={`nav-btn`}>
                        <span className={'nav-text'}>{t('projects')}
                    </span>
                </span>
                    <span className={`nav-btn`}>
                        <span className={'nav-text'}>{t('about')}
                    </span>
                </span>
                    <span className={'nav-btn'}>
                        <span className={'nav-text'}>{t('contact')}
                    </span>
                </span>
                </div>
            </div>
        </nav>
    );
}