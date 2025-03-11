import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";
import {getLanguage} from "../util/util.ts";

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

const initialMeasurementsSlice: GenericState = {
    isLoading: false,
    data: [],
    error: undefined
}

const initialViewState: any = {
    chosenYear: {value: 2024, label: 2024},
    chosenMonth: {value: "01", label: getLanguage() === 'pl' ? 'Styczeń' : 'January'},
    chosenCountry: {value: 156, label: 'Canada'},
    chosenLocation: {
        value: {
            "sensors": [
                {
                    "id": 473,
                    "name": "no2 ppm",
                    "parameter": {
                        "id": 7,
                        "name": "no2",
                        "units": "ppm",
                        "displayName": "NO₂"
                    }
                },
                {
                    "id": 472,
                    "name": "so2 ppm",
                    "parameter": {
                        "id": 9,
                        "name": "so2",
                        "units": "ppm",
                        "displayName": "SO₂"
                    }
                }
            ]
        },
        label: 'Wagner2'
    }
}

export const fetchAQCountries =
    createAsyncThunk<any, void>(
        'airQuality/fetchAQCountries',
        async (_, {rejectWithValue}) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/aq/countries`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    return rejectWithValue(response.status.toString());
                }
                return await response.json();
            } catch (error: any) {
                return rejectWithValue('restApiDown');
            }
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
            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }
            return await response.json();
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

export const fetchAQMeasurements =
    createAsyncThunk<any, any>(
        'airQuality/fetchAQMeasurements',
        async (params: any) => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/aq/measurements`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sensorIds: params.sensorIds,
                    dateFrom: params.dateFrom,
                    dateTo: params.dateTo
                })
            });
            if (!response.ok) {
                throw new Error(`OpenAQ API error: ${response.statusText}`);
            }
            return await response.json();
        });

export const fetchAQMeasurementsSlice = createSlice(
    {
        name: 'fetchAQMeasurements',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialMeasurementsSlice,
        reducers: {},
        extraReducers: (builder: any) => {
            builder.addCase(fetchAQMeasurements.pending, (state: GenericState) => {
                state.isLoading = true;
            }).addCase(fetchAQMeasurements.fulfilled, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.data = action.payload;
            }).addCase(fetchAQMeasurements.rejected, (state: GenericState, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    }
)

export const aqViewSlice = createSlice(
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
            },
            setChosenMonth: (state, action) => {
                state.chosenMonth = action.payload;
            }
        }
    });

export const {
    setChosenCountry,
    setChosenLocation,
    setChosenYear,
    setChosenMonth
} = aqViewSlice.actions;

const airQualityReducer = combineReducers({
    fetchCountries: fetchAQCountriesSlice.reducer,
    fetchLocations: fetchAQLocationsSlice.reducer,
    fetchMeasurements: fetchAQMeasurementsSlice.reducer,
    view: aqViewSlice.reducer
});

export default airQualityReducer;