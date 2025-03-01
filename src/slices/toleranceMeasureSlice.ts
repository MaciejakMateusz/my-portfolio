import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";
import {Chip} from "../interfaces/Chip.ts";
import {ToleranceMeasureFields} from "../interfaces/ToleranceMeasureFields.ts";
import {PreparedMeasurements} from "../interfaces/PreparedMeasurements.ts";

const initialFetchState: GenericState = {
    isLoading: false,
    data: undefined,
    error: undefined
};

const initialFormState: ToleranceMeasureFields = {
    productLength: 0,
    posTolerance: 0,
    negTolerance: 0,
    measurements: [] as Chip[]
};

export const fetchAnalysis =
    createAsyncThunk<void, PreparedMeasurements>(
        'contact/fetchAnalysis',
        async (params, {rejectWithValue}) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/tolerance-measure/calculate`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });

                if (!response.ok) {
                    return rejectWithValue(`Server responded with ${response.status} - ${response.statusText}`);
                }

                try {
                    return await response.json();
                } catch (error: any) {
                    return {};
                }
            } catch (error: any) {
                return rejectWithValue(error.message || 'Could not connect to server');
            }
        });

export const fetchAnalysisSlice = createSlice(
    {
        name: 'fetchAnalysis',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFetchState,
        reducers: {
            setData: (state, action) => {
                state.data = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAnalysis.pending, state => {
                state.isLoading = true;
            }).addCase(fetchAnalysis.fulfilled, state => {
                state.isLoading = false;
            }).addCase(fetchAnalysis.rejected, (state, action) => {
                state.isLoading = false;
                if (action.payload) {
                    state.error = action.payload as string;
                } else {
                    state.error = action.error.message || 'Failed to fetch analysis.';
                }
            })
        }
    });

export const toleranceMeasureFormSlice = createSlice(
    {
        name: 'form',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFormState,
        reducers: {
            setProductLength: (state, action) => {
                state.productLength = action.payload;
            },
            setPosTolerance: (state, action) => {
                state.posTolerance = action.payload;
            },
            setNegTolerance: (state, action) => {
                state.negTolerance = action.payload;
            },
            setMeasurements: (state, action) => {
                state.measurements = action.payload;
            },
            resetForm: state => {
                state.productLength = 0;
                state.posTolerance = 0;
                state.negTolerance = 0;
                state.measurements = [] as Chip[];
            }
        }
    });

export const {
    setProductLength,
    setPosTolerance,
    setNegTolerance,
    setMeasurements,
    resetForm
} = toleranceMeasureFormSlice.actions;

export const {setData} = fetchAnalysisSlice.actions

const toleranceMeasureReducer = combineReducers({
    analysis: fetchAnalysisSlice.reducer,
    form: toleranceMeasureFormSlice.reducer
});

export default toleranceMeasureReducer;