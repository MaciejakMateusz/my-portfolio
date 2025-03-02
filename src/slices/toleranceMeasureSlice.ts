import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Chip} from "../interfaces/Chip.ts";
import {ToleranceMeasureFields} from "../interfaces/ToleranceMeasureFields.ts";
import {PreparedMeasurements} from "../interfaces/PreparedMeasurements.ts";
import {AnalysisState} from "../interfaces/AnalysisState.ts";
import {AnalysisType} from "../types/AnalysisType.ts";

const initialFetchState: AnalysisState = {
    pdf: undefined,
    analysis: undefined,
    isLoading: false,
    error: undefined,
};

const initialFormState: ToleranceMeasureFields = {
    productLength: 0,
    posTolerance: 0,
    negTolerance: 0,
    measurements: [] as Chip[]
};

export const fetchAnalysis =
    createAsyncThunk<{ pdf: string; analysis: AnalysisType }, PreparedMeasurements>(
        'contact/fetchAnalysis',
        async (params, {rejectWithValue}) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PORTFOLIO_REST}/tolerance-measure/calculate`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(params)
                    }
                );

                if (!response.ok) {
                    return rejectWithValue(
                        `Server responded with ${response.status} - ${response.statusText}`
                    );
                }

                return await response.json();
            } catch (error: any) {
                return rejectWithValue(
                    error.message || 'Could not connect to server'
                );
            }
        }
    );


export const fetchAnalysisSlice = createSlice({
    name: 'fetchAnalysis',
    initialState: initialFetchState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnalysis.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAnalysis.fulfilled, (state, action) => {
                state.isLoading = false;
                state.pdf = action.payload.pdf;
                state.analysis = action.payload.analysis;
            })
            .addCase(fetchAnalysis.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? (action.payload as string)
                    : action.error.message || 'Failed to fetch analysis.';
            });
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

const toleranceMeasureReducer = combineReducers({
    analysis: fetchAnalysisSlice.reducer,
    form: toleranceMeasureFormSlice.reducer
});

export default toleranceMeasureReducer;