import {useTranslation} from 'react-i18next';
import {ProjectCard} from "../main/projects/ProjectCard.tsx";

export const useProjectCards = (): JSX.Element[] => {
    const {t} = useTranslation();
    return [
        <ProjectCard key={'uxUiDesigner'}
                     name={'UX/UI Designer Portfolio'}
                     description={t('uiDesignerDescription')}
                     technologies={'React, JavaScript, HTML, CSS'}
                     img={'/designer-image.png'}
                     projectUrl={'https://maciejakaneta.pl'}
                     githubUrl={'https://github.com/MaciejakMateusz/portfolio-website-aneta'}/>,
        <ProjectCard key={'timeTracker'}
                     name={'Time Tracker'}
                     description={t('timeTrackerDescription')}
                     technologies={'JavaScript, HTML, CSS'}
                     img={'/designer-image.png'}
                     projectUrl={'https://t1metrack3r.netlify.app'}
                     githubUrl={'https://github.com/MaciejakMateusz/Timetracker'}/>,
        <ProjectCard key={'translatorAI'}
                     name={t('translatorAI')}
                     description={t('translatorAIDescription')}
                     technologies={'Spring Boot, React, Redux, REST, AI'}
                     img={"/translator-image.png"}
                     projectUrl={'/ai-translator'}
                     githubUrl={'https://github.com/MaciejakMateusz/my-portfolio-rest/blob/main/src/main/java/pl/maciejak/my_portfolio_rest/service/TranslationsServiceImpl.java'}/>,
        <ProjectCard key={'airQuality'}
                     name={'Air Quality'}
                     description={t('airQualityDescription')}
                     technologies={'React, Redux, Spring Boot, REST'}
                     img={'/air-quality-image.png'}
                     projectUrl={'/air-quality'}
                     githubUrl={'https://github.com/MaciejakMateusz/my-portfolio-rest/blob/main/src/main/java/pl/maciejak/my_portfolio_rest/service/AirQualityServiceImpl.java'}/>,
        <ProjectCard key={'digitalMenu'}
                     name={t('digitalMenu')}
                     description={t('digitalMenuDescription')}
                     technologies={'Spring Boot, Redis, MySQL, React, Redux'}
                     img={'/digital-menu-image.png'}
                     projectUrl={'https://hs-dgmenu-production.up.railway.app'}
                     githubUrl={'https://github.com/MaciejakMateusz/hungry-scan-customer'}/>,
        <ProjectCard key={'toleranceMeasure'}
                     name={'Tolerance measure'}
                     description={t('toleranceMeasureDescription')}
                     technologies={'Spring Boot, REST, React, Redux'}
                     img={'/air-quality-image.png'}
                     projectUrl={'/tolerance-measure'}
                     githubUrl={'https://github.com/MaciejakMateusz/ToleranceMeasure'}/>,
        <ProjectCard key={'portfolioApi'}
                     name={'Portfolio REST-API'}
                     description={t('portfolioApiDescription')}
                     technologies={'Spring Boot, REST'}
                     img="/air-quality-image.png"
                     projectUrl={'/portfolio-api'}
                     githubUrl={'https://github.com/MaciejakMateusz/my-portfolio-rest'}/>,
    ];
};