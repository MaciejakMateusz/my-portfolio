import {SocialButton} from "./SocialButton.tsx";
import {useTranslation} from "react-i18next";

export const IntroductionButtons = () => {
    const {t} = useTranslation();
    return (
        <div className={'introduction-buttons-wrapper'}>
            <button className={'primary-button big'}>{t('projects')}</button>
            <SocialButton url={'https://www.linkedin.com/in/mateusz-maciejak/'} icon={'/linkedin-logo.svg'}/>
            <SocialButton url={'https://github.com/MaciejakMateusz'} icon={'/github-logo.svg'}/>
        </div>
    );
}