import {SocialButton} from "./SocialButton.tsx";
import {useTranslation} from "react-i18next";
import {CvDownloadBtn} from "./CvDownloadBtn.tsx";

export const IntroductionButtons = ({projectsRef}: any) => {
    const {t} = useTranslation();

    const handleScrollTo = (ref: any, offset: number) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={'introduction-buttons-wrapper'}>
            <button className={'primary-button big'}
                    onClick={() => handleScrollTo(projectsRef, -100)}>
                {t('projects')}
            </button>
            <SocialButton url={'https://www.linkedin.com/in/mateusz-maciejak/'} icon={'/linkedin-logo.svg'}/>
            <SocialButton url={'https://github.com/MaciejakMateusz'} icon={'/github-logo.svg'}/>
            <CvDownloadBtn/>
        </div>
    );
}