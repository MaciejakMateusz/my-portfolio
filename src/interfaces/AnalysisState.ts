import {AnalysisType} from "../types/AnalysisType.ts";

export interface AnalysisState {
    pdf?: string;
    analysis?: AnalysisType | undefined;
    isLoading: boolean;
    error?: string;
}