import {HorizontalCard} from "../shared/HorizontalCard.tsx";
import {SocialButton} from "../landing/SocialButton.tsx";
import {useTranslation} from "react-i18next";
import {CvDownloadBtn} from "../landing/CvDownloadBtn.tsx";

export const ContactDetails = () => {
    const {t} = useTranslation();
    return (
        <div className={'contact-details-container main-typography'}>
            <div>
                <HorizontalCard header={t('callMe')}
                                description={'+48 880 204 181'}
                                icon={'/placeholder-icon.svg'}
                                href={'tel:+48 880 204 181'}/>
                <HorizontalCard header={t('emailMe')}
                                description={'maciejakmateusz@gmail.com'}
                                icon={'/placeholder-icon.svg'}
                                href={'mailTo:maciejakmateusz@gmail.com'}/>
                <HorizontalCard header={t('location')}
                                description={'Katowice (Polska)'}
                                icon={'/placeholder-icon.svg'}
                                type={'map'}
                                href={'https://www.google.com/maps/place/Katowice/@50.2280398,18.8970758,11z/data=!4m6!3m5!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815!16zL20vMGJsZDg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D'}/>
                <div className={'contact-social-buttons-wrapper'}>
                    <SocialButton url={'https://www.linkedin.com/in/mateusz-maciejak/'}
                                  icon={'/linkedin-logo.svg'}/>
                    <SocialButton url={'https://github.com/MaciejakMateusz'}
                                  icon={'/github-logo.svg'}/>
                    <CvDownloadBtn/>
                </div>
            </div>
        </div>
    );
}