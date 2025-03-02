export type AnalysisType = {
    reportDate: string;
    measurements: number[];
    totalCount: number;
    average: number;
    outsideTolerance: number;
    insideTolerance: number;
    upperBound: number;
    lowerBound: number;
    biggerThanUpperBound: number;
    smallerThanLowerBound: number;
    maxMeasurement: number;
    minMeasurement: number;
    difference: number;
    sortedMeasurements: number[];
}