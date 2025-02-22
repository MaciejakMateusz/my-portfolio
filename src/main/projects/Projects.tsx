import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";

export const Projects = () => {
    const {t} = useTranslation();
    return (
        <section className={'projects'}>
            <SectionHeader title={t('projects')} description={t('projectsDescription')}/>
        </section>
    );
}