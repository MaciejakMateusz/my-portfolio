import {useSelector} from "react-redux";
import {downloadPdf} from "../../../../util/util.ts";
import {useTranslation} from "react-i18next";
import {CustomLabel} from "../../../shared/form/CustomLabel.tsx";
import {ReactSVG} from "react-svg";

export const Analysis = () => {
    const {t} = useTranslation();
    const {analysis, pdf} = useSelector<any, any>(state => state.toleranceMeasure.analysis);

    const formatMeasurements = (measurements: number[]) => {
        return measurements.map((m, i) => (
            <span key={i}>
                {m}
                {i !== measurements.length - 1 ? ", " : ""}
            </span>
        ));
    }

    const renderAnalysis = () => {
        if (!analysis) {
            return (
                <div className={'analysis-container'}>
                    <span>{t('noResults')}</span>
                </div>
            );
        }
        return (
            <>
                <div className={'analysis-container'}>
                    <div className={'analysis'}>
                    <span className={'analysis-line'}>
                        <strong>{t('analysisDate')}</strong>{analysis.reportDate}
                    </span>
                        <div className={'analysis-separator'}/>
                        <span className={'analysis-line'}>
                        <strong>{t('allMeasurements')}</strong>[{formatMeasurements(analysis.measurements)}]
                    </span>
                        <div className={'analysis-separator'}/>
                        <span className={'analysis-line'}>
                        <strong>{t('amountMeasured')}</strong>{analysis.totalCount}{t('pieces')}
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('avgMeasurements')}</strong>{analysis.average} mm
                    </span>
                        <div className={'analysis-separator'}/>
                        <span className={'analysis-line'}>
                        <strong>{t('outsideTol')}</strong>{analysis.outsideTolerance}{t('pieces')}
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('insideTol')}</strong>{analysis.insideTolerance}{t('pieces')}
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('greaterThan', {upperBound: analysis.upperBound})}</strong>{analysis.biggerThanUpperBound}{t('pieces')}
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('smallerThan', {lowerBound: analysis.lowerBound})}</strong>{analysis.smallerThanLowerBound}{t('pieces')}
                    </span>
                        <div className={'analysis-separator'}/>
                        <span className={'analysis-line'}>
                        <strong>{t('greatestMeasurement')}</strong>{analysis.maxMeasurement} mm
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('smallestMeasurement')}</strong>{analysis.minMeasurement} mm
                    </span>
                        <span className={'analysis-line'}>
                        <strong>{t('measurementsDiff')}</strong>{analysis.difference} mm
                    </span>
                        <div className={'analysis-separator'}/>
                        <span className={'analysis-line'}>
                        <strong>{t('measurementsAsc')}</strong>[{formatMeasurements(analysis.sortedMeasurements)}]
                    </span>
                    </div>
                </div>
                <div className={'download-report'}>
                    <button type={'button'}
                            className={'secondary-button white'}
                            onClick={() => downloadPdf(pdf)}>
                        {t('downloadReport')}
                        <ReactSVG src={'/download-icon.svg'}
                                  className={'download-icon white'}/>
                    </button>
                </div>
            </>
        );
    }
    return (
        <>
            <CustomLabel text={t('analysis')}/>
            {renderAnalysis()}
        </>
    );
}