import {SocialButton} from "../start/SocialButton.tsx";
import {useTranslation} from "react-i18next";
import {CvDownloadBtn} from "../start/CvDownloadBtn.tsx";

export const ContactDetails = () => {
    const {t} = useTranslation();

    const openGoogleMapsLocation = () => {
        window.open('https://www.google.com/maps/place/Katowice/@50.2280398,18.8970758,11z/data=!4m6!3m5!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815!16zL20vMGJsZDg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D', '_blank');
    }

    return (
        <div className={'contact-details-container main-typography'}>
            <div>
                <div className={'contact-detail'}>
                    <p className={'contact-detail-header'}>{t('callMe')}</p>
                    <p className={'contact-detail-link'}>
                        <a href={'tel:+48 880 204 181'}>
                            +48 880 204 181
                        </a>
                    </p>
                </div>
                <div className={'contact-detail'}>
                    <p className={'contact-detail-header'}>{t('emailMe')}</p>
                    <p className={'contact-detail-link'}>
                        <a href={'mailto:maciejakmateusz@gmail.com'}>
                            maciejakmateusz@gmail.com
                        </a>
                    </p>
                </div>
                <div className={'contact-detail'}>
                    <p className={'contact-detail-header'}>{t('location')}</p>
                    <p className={'contact-detail-link'}>
                        <span onClick={openGoogleMapsLocation}>
                            {`Katowice (${t('poland')})`}
                        </span>
                    </p>
                </div>
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