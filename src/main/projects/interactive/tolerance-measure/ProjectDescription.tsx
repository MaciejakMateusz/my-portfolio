import {useTranslation} from "react-i18next";

export const ProjectDescription = () => {
    const {t} = useTranslation();
    return (
        <div className={'project-description'}>
            <div>
                <h1 className={'project-description-header'}>{t('toleranceMeasure_projectDescription')}</h1>
                <p>{t('toleranceMeasure_projectDescriptionText')}</p>

                <h2 className={'project-description-header'}>{t('toleranceMeasure_keyFeatures')}</h2>
                <ul>
                    <li className={'project-description-li'}>
                        <strong>{t('toleranceMeasure_dataCollection')}&nbsp;</strong>
                        {t('toleranceMeasure_dataCollectionText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('toleranceMeasure_generatingPDFs')}&nbsp;</strong>
                        {t('toleranceMeasure_generatingPDFsText')}
                    </li>
                    <li className={'project-description-li'}>
                        <strong>{t('toleranceMeasure_detailedPrecisionAnalysis')}&nbsp;</strong>
                        {t('toleranceMeasure_detailedPrecisionAnalysisText')}
                    </li>
                </ul>

                <h2 className={'project-description-header'}>{t('toleranceMeasure_technologiesUsed')}</h2>
                <ul>
                    <li className={'project-description-li'}>Spring Boot 3</li>
                    <li className={'project-description-li'}>Spring Security</li>
                    <li className={'project-description-li'}>REST</li>
                    <li className={'project-description-li'}>TypeScript</li>
                    <li className={'project-description-li'}>React</li>
                    <li className={'project-description-li'}>Redux</li>
                    <li className={'project-description-li'}>Thunk</li>
                </ul>

                <h2 className={'project-description-header'}>{t('toleranceMeasure_dataAnalysis')}</h2>
                <ul>
                    <li className={'project-description-li'}>{t('toleranceMeasure_totalProductsMeasured')}</li>
                    <li className={'project-description-li'}>{t('toleranceMeasure_averageMeasurement')}</li>
                    <li className={'project-description-li'}>{t('toleranceMeasure_toleranceViolations')}</li>
                    <li className={'project-description-li'}>{t('toleranceMeasure_largestSmallestMeasurements')}</li>
                    <li className={'project-description-li'}>{t('toleranceMeasure_measurementRange')}</li>
                </ul>
            </div>
        </div>
    );
}