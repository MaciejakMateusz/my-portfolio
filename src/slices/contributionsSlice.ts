import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ContributionsState} from "../interfaces/ContributionsState.ts";
import {Contribution} from "../types/Contribution.ts";
import {YearRange} from "../types/YearRange.ts";

const initialState: ContributionsState = {
    isLoading: false,
    data: [],
    error: undefined
};

export const fetchContributions =
    createAsyncThunk<Contribution[] | undefined, YearRange>(
        'contributions/fetchContributions',
        async (range) => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/contributions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(range),
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }

            return await response.json();
        });

export const fetchContributionsSlice = createSlice(
    {
        name: 'fetchContributions',
        reducerPath: undefined,
        selectors: undefined,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchContributions.pending, state => {
                state.isLoading = true;
            }).addCase(fetchContributions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }).addCase(fetchContributions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    }
)

const contributionsReducer = combineReducers({
    contributions: fetchContributionsSlice.reducer
});

export default contributionsReducer;