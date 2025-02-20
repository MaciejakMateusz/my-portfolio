import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";


const initialState: GenericState = {
    isLoading: false,
    data: [],
    error: undefined
}

export const fetchAQCountries =
    createAsyncThunk<any, void>(
        'airQuality/fetchAQCountries',
        async () => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/aq/countries`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log("COUNTRIES", response)

            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }

            return await response.json();
        });

export const fetchAQLocations =
    createAsyncThunk<any, void>(
        'airQuality/fetchAQLocations',
        async () => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/aq/locations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(77)
            });

            console.log("LOCATIONS", response)

            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }

            return await response.json();
        });

export const fetchAQCountriesSlice = createSlice(
    {
        name: 'fetchAQ',
        reducerPath: undefined,
        selectors: undefined,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchAQCountries.pending, state => {
                state.isLoading = true;
            }).addCase(fetchAQCountries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }).addCase(fetchAQCountries.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    }
)

const airQualityReducer = combineReducers({
    airQuality: fetchAQCountriesSlice.reducer
});

export default airQualityReducer;