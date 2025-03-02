import {useSelector} from "react-redux";
import {downloadPdf} from "../../../../util/util.ts";
import {useTranslation} from "react-i18next";

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

    if(!analysis) {
        return <></>;
    }

    return (
        <div className={'analysis'}>
            <h3>Analiza:</h3>
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
            <button className={'primary-button'} onClick={() => downloadPdf(pdf)}>{t('downloadReport')}</button>
        </div>
    );
}