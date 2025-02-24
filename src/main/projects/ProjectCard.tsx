
type ProjectCardProps = {
    name: string;
    description: string;
    technologies: string;
    img: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="carousel-card">
            <div className="carousel-card-inner-wrapper">
                <img
                    src={props.img}
                    alt={props.name}
                    className={"project-card-image"}/>
                <div className={"project-card-image-gradient"} />
                <span className={'project-card-name'}>{props.name}</span>
            </div>

            <div className="carousel-card-turned">
                <p className={'project-card-description'}>{props.description}</p>
                <div className={'project-card-technologies-container'}>
                    <p className={'project-card-technologies'}>Technologie:</p>
                    <span>{props.technologies}</span>
                </div>
                <div className={'carousel-card-button-container'}>
                    <button className={'primary-button'}>Zobacz projekt</button>
                </div>
            </div>
        </div>
    );
};
