import {Contribution} from "../types/Contribution.ts";

export interface ContributionsState {
    isLoading: boolean,
    data: Contribution[] | undefined,
    error: any
}