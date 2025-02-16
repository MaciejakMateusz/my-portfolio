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
            const yearBegin: string = range.yearBegin.toISOString();
            const yearEnd: string = range.yearEnd.toISOString();
            const query: string = `
            query {
            user(login: "${import.meta.env.VITE_GITHUB_LOGIN}") {
            contributionsCollection(
                from: "${yearBegin}"
                to: "${yearEnd}"
                ) {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
            }
        }`;
            const response = await fetch(import.meta.env.VITE_GITHUB_GRAPHQL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                },
                body: JSON.stringify({query}),
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }

            const json = await response.json();

            const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
            const contributions: Contribution[] = weeks.flatMap((week: any) =>
                week.contributionDays
                    .filter((day: any) => day.contributionCount > 0)
                    .map((day: any) => ({
                        day: day.date,
                        value: day.contributionCount,
                    }))
            );

            return contributions;
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