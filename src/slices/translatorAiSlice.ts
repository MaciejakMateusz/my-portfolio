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
    source_lang: undefined,
    target_lang: undefined,
    translation: "",
    detectedSource: undefined,
    context: ""
};

export const fetchTranslation =
    createAsyncThunk<any, TranslationFormFields>(
        'translation/fetchTranslation',
        async (params, {rejectWithValue}) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_PORTFOLIO_REST}/translator/translate`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept-Language': getLanguage()
                        },
                        body: JSON.stringify({
                            text: [params.text],
                            source_lang: params.source_lang,
                            target_lang: params.target_lang,
                            context: params.context
                        })
                    }
                );

                if (!response.ok) {
                    return rejectWithValue(response.status.toString());
                }

                return await response.json();
            } catch (error: any) {
                return rejectWithValue('restApiDown');
            }
        }
    );


export const fetchTranslationSlice = createSlice({
    name: 'fetchTranslation',
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
                state.error = action.payload;
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
            setTranslation: (state, action) => {
                state.translation = action.payload;
            },
            setDetectedSource: (state, action) => {
                state.detectedSource = action.payload;
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
    setTranslation,
    setDetectedSource,
    setContext
} = translationFormSlice.actions;

const translationReducer = combineReducers({
    translation: fetchTranslationSlice.reducer,
    form: translationFormSlice.reducer
});

export default translationReducer;