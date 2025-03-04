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
            <CvDownloadBtn/>
        </div>
    );
}