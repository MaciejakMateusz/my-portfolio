import {Chip} from "./Chip.ts";

export interface ToleranceMeasureFields {
    productLength: number;
    negTolerance: number;
    posTolerance: number;
    measurements: Chip[];
}