import {useTranslation} from 'react-i18next';
import {ProjectCard} from "../main/projects/ProjectCard.tsx";

export const useProjectCards = (): JSX.Element[] => {
    const {t} = useTranslation();
    return [
        <ProjectCard
            key="UI Designer Portfolio"
            name="UI Designer Portfolio"
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/designer-image.png"
        />,
        <ProjectCard
            key="Time Tracker"
            name="Time Tracker"
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/designer-image.png"
        />,
        <ProjectCard
            key="translatorAI"
            name={t('translatorAI')}
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/translator-image.png"
        />,
        <ProjectCard
            key="Air Quality"
            name="Air Quality"
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/air-quality-image.png"
        />,
        <ProjectCard
            key="digitalMenu"
            name={t('digitalMenu')}
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/digital-menu-image.png"
        />,
        <ProjectCard
            key="Tolerance measure"
            name="Tolerance measure"
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/air-quality-image.png"
        />,
        <ProjectCard
            key="Portfolio REST-API"
            name="Portfolio REST-API"
            description="Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam."
            technologies="Spreng but, Rekt, REST, AI"
            img="/air-quality-image.png"
        />,
    ];
};