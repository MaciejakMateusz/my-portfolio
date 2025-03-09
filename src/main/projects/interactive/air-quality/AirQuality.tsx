import {AirQualityChart} from "./AirQualityChart.tsx";
import {AirQualityControlPanel} from "./AirQualityControlPanel.tsx";
import {ProjectTopper} from "../ProjectTopper.tsx";
import {useTranslation} from "react-i18next";
import {Footer} from "../../../footer/Footer.tsx";
import {ProjectDescription} from "./ProjectDescription.tsx";

export const AirQuality = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className={'project-view'}>
                <ProjectTopper location={`${t('projects')} / Air Quality`}
                               header={'Air Quality'}
                               description={t('airQualityDescription')}/>
                <div className={'project-container'}>
                    <AirQualityControlPanel/>
                    <AirQualityChart/>
                </div>
                <ProjectDescription/>
            </section>
            <Footer/>
        </>
    );
};