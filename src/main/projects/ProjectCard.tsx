import {useTranslation} from "react-i18next";
import {SocialButton} from "../start/SocialButton.tsx";

type ProjectCardProps = {
    name: string;
    description: string;
    technologies: string;
    img: string;
    projectUrl: string;
    githubUrl: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    const {t} = useTranslation();
    return (
        <div className={'carousel-card non-selectable'}>
            <div className={'carousel-card-inner-wrapper'}>
                <img
                    src={props.img}
                    alt={props.name}
                    className={'project-card-image'}/>
                <div className={'project-card-image-gradient'} />
                <span className={'project-card-name'}>{props.name}</span>
            </div>

            <div className={'carousel-card-turned'}>
                <p className={'project-card-description'}>{props.description}</p>
                <div className={'project-card-technologies-container'}>
                    <p className={'project-card-technologies'}>{t('technologies')}:</p>
                    <span>{props.technologies}</span>
                </div>
                <div className={'carousel-card-button-container'}>
                    <button className={'primary-button'}
                            onClick={() => window.open(props.projectUrl, '_blank')}>
                        {t('seeProject')}
                    </button>
                    <SocialButton url={props?.githubUrl} icon={'/github-logo.svg'}/>
                </div>
            </div>
        </div>
    );
};
