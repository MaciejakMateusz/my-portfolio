import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";

const initialCountriesState: GenericState = {
    isLoading: false,
    data: [],
    error: undefined
}

const initialLocationsState: GenericState = {
    isLoading: false,
    data: [],
    error: undefined
}

const initialViewState: any = {
    chosenYear: {value: 2024, label: 2024},
    chosenCountry: {value: 77, label: 'Poland'},
    chosenLocation: {value: 7274, label: 'Katowice, ul. Plebiscytowa/A4'}
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

            const body = await response.json();

            console.log("COUNTRIES", body)

            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }

            return body;
        });

export const fetchAQCountriesSlice = createSlice(
    {
        name: 'fetchAQCountries',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialCountriesState,
        reducers: {},
        extraReducers: (builder: any) => {
            builder.addCase(fetchAQCountries.pending, (state: GenericState) => {
                state.isLoading = true;
            }).addCase(fetchAQCountries.fulfilled, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.data = action.payload;
            }).addCase(fetchAQCountries.rejected, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    }
)

export const fetchAQLocations =
    createAsyncThunk<any, number>(
        'airQuality/fetchAQLocations',
        async (countryId: number) => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/aq/locations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(countryId)
            });
            const body = await response.json();

            console.log("LOCATIONS", body)

            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }

            return body;
        });

export const fetchAQLocationsSlice = createSlice(
    {
        name: 'fetchAQLocations',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialLocationsState,
        reducers: {},
        extraReducers: (builder: any) => {
            builder.addCase(fetchAQLocations.pending, (state: GenericState) => {
                state.isLoading = true;
            }).addCase(fetchAQLocations.fulfilled, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.data = action.payload;
            }).addCase(fetchAQLocations.rejected, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    }
)

export const aqSlice = createSlice(
    {
        name: 'view',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialViewState,
        reducers: {
            setChosenCountry: (state, action) => {
                state.chosenCountry = action.payload;
            },
            setChosenLocation: (state, action) => {
                state.chosenLocation = action.payload;
            },
            setChosenYear: (state, action) => {
                state.chosenYear = action.payload;
            }
        }
    });

export const {
    setChosenCountry,
    setChosenLocation,
    setChosenYear} = aqSlice.actions;

const airQualityReducer = combineReducers({
    fetchCountries: fetchAQCountriesSlice.reducer,
    fetchLocations: fetchAQLocationsSlice.reducer,
    view: aqSlice.reducer
});

export default airQualityReducer;