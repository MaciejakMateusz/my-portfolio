import {ToleranceMeasureForm} from "./ToleranceMeasureForm.tsx";
import {ProjectTopper} from "../ProjectTopper.tsx";
import {useTranslation} from "react-i18next";
import {ProjectDescription} from "./ProjectDescription.tsx";
import {Footer} from "../../../footer/Footer.tsx";
import {useSelector} from "react-redux";

export const ToleranceMeasure = () => {
    const {t} = useTranslation();
    const {error} = useSelector<any, any>(state => state.toleranceMeasure.analysis);

    return (
        <>
            <section className={'project-view'}>
                <ProjectTopper location={`${t('projects')} / Tolerance Measure`}
                               header={'Tolerance Measure'}
                               description={`${t('toleranceMeasureDescription')}`}/>
                <ToleranceMeasureForm/>
                {error && <span className={'form-msg error-msg'}>
                        {t('restApiDown')}
                        </span>}
                <ProjectDescription/>
            </section>
            <Footer/>
        </>
    );
}