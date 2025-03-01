import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ContributionsState} from "../interfaces/ContributionsState.ts";
import {Contribution} from "../types/Contribution.ts";
import {YearRange} from "../types/YearRange.ts";

const initialState: ContributionsState = {
    isLoading: false,
    data: [],
    error: undefined
};

export const fetchContributions = createAsyncThunk<
    Contribution[],
    YearRange,
    { rejectValue: string }
>(
    'contributions/fetchContributions',
    async (range, {rejectWithValue}) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_PORTFOLIO_REST}/contributions`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(range),
                }
            );

            if (!response.ok) {
                return rejectWithValue(`Server responded with ${response.status} - ${response.statusText}`);
            }

            return (await response.json()) as Contribution[];
        } catch (error: any) {
            return rejectWithValue(error.message || 'Could not connect to server');
        }
    }
);

export const fetchContributionsSlice = createSlice({
    name: 'fetchContributions',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContributions.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContributions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload || [];
            })
            .addCase(fetchContributions.rejected, (state, action) => {
                state.isLoading = false;
                if (action.payload) {
                    state.error = action.payload as string;
                } else {
                    state.error = action.error.message || 'Failed to fetch contributions';
                }
            });
    }
});

const contributionsReducer = combineReducers({
    contributions: fetchContributionsSlice.reducer
});

export default contributionsReducer;