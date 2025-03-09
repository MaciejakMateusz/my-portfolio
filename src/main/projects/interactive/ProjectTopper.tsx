type ProjectTopperProps = {
    location: string;
    header: string;
    description: string;
}

export const ProjectTopper = ({location, header, description}: ProjectTopperProps) => {
    return (
        <div>
            <p className={'project-location'}>
                {location}
            </p>
            <h2 className={'project-header'}>
                {header}
            </h2>
            <p className={'project-header-description'}>
                {description}
            </p>
        </div>
    );
}