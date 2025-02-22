import {useTranslation} from "react-i18next";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {RadarChart} from "./RadarChart.tsx";

export const Skills = () => {
    const {t} = useTranslation();
    return (
        <section className={'skills'}>
            <SectionHeader title={t('skills')} description={t('skillsDescription')}/>
            <div className={'skills-container'}>
                <div className={'skills-box'}>
                    <div className={'continuous-scroll'}></div>
                    <RadarChart/>
                </div>
            </div>
        </section>
    );
}