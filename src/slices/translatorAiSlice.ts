import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getLanguage} from "../util/util.ts";
import {GenericState} from "../interfaces/GenericState.ts";
import {TranslationFormFields} from "../interfaces/TranslationFormFields.ts";

const initialFetchState: GenericState = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

const initialFormState: TranslationFormFields = {
    text: "",
    source_lang: {value: "EN", label: "EN"},
    target_lang: {value: "EN", label: "EN"},
    context: ""
};

export const fetchTranslation =
    createAsyncThunk<any, TranslationFormFields>(
        'contact/fetchAnalysis',
        async (params, {rejectWithValue}) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PORTFOLIO_REST}/translate`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept-Language': getLanguage()
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


export const fetchTranslationSlice = createSlice({
    name: 'fetchAnalysis',
    initialState: initialFetchState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTranslation.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTranslation.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTranslation.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
                    ? (action.payload as string)
                    : action.error.message || 'Failed to fetch analysis.';
            });
    }
});

export const translationFormSlice = createSlice(
    {
        name: 'form',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFormState,
        reducers: {
            setText: (state, action) => {
                state.text = action.payload;
            },
            setSourceLang: (state, action) => {
                state.source_lang = action.payload;
            },
            setTargetLang: (state, action) => {
                state.target_lang = action.payload;
            },
            setContext: (state, action) => {
                state.context = action.payload;
            }
        }
    });

export const {
    setText,
    setSourceLang,
    setTargetLang,
    setContext
} = translationFormSlice.actions;

const translationReducer = combineReducers({
    translation: fetchTranslationSlice.reducer,
    form: translationFormSlice.reducer
});

export default translationReducer;