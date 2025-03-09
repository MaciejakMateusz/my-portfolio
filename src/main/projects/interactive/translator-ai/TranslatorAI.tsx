import {useTranslation} from "react-i18next";
import {Footer} from "../../../footer/Footer.tsx";
import {ProjectDescription} from "./ProjectDescription.tsx";
import {TranslatorAIForm} from "./TranslatorAIForm.tsx";
import {ProjectTopper} from "../ProjectTopper.tsx";

export const TranslatorAI = () => {
    const {t} = useTranslation();

    return (
        <>
            <section className={'translator-ai'}>
                <ProjectTopper location={`${t('projects')} / AI Translator`}
                               header={'AI Translator'}
                               description={`${t('translatorAIDescription')}`}/>
                <TranslatorAIForm/>
                <ProjectDescription/>
            </section>
            <Footer/>
        </>
    );
};