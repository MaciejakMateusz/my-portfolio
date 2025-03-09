import {ToleranceMeasureForm} from "./ToleranceMeasureForm.tsx";
import {ProjectTopper} from "../ProjectTopper.tsx";
import {useTranslation} from "react-i18next";
import {ProjectDescription} from "./ProjectDescription.tsx";
import {Footer} from "../../../footer/Footer.tsx";

export const ToleranceMeasure = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className={'project-view'}>
                <ProjectTopper location={`${t('projects')} / Tolerance Measure`}
                               header={'Tolerance Measure'}
                               description={`${t('toleranceMeasureDescription')}`}/>
                <ToleranceMeasureForm/>
                <ProjectDescription/>
            </section>
            <Footer/>
        </>
    );
}