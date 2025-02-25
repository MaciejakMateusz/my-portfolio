import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";
import {ContactState} from "../interfaces/ContactState.ts";

const initialFetchState: GenericState = {
    isLoading: false,
    data: undefined,
    error: undefined
};

const initialFormState: ContactState = {
    from: '',
    subject: '',
    text: ''
};

export const sendEmail =
    createAsyncThunk<void, ContactState>(
        'contact/sendEmail',
        async (params) => {
            const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }

            return await response.json();
        });

export const sendEmailSlice = createSlice(
    {
        name: 'sendEmail',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFetchState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(sendEmail.pending, state => {
                state.isLoading = true;
            }).addCase(sendEmail.fulfilled, state => {
                state.isLoading = false;
            }).addCase(sendEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        }
    });

export const contactFormSlice = createSlice(
    {
        name: 'form',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFormState,
        reducers: {
            setFrom: (state, action) => {
                state.from = action.payload;
            },
            setSubject: (state, action) => {
                state.subject = action.payload;
            },
            setText: (state, action) => {
                state.text = action.payload;
            },
            resetForm: state => {
                state.from = '';
                state.subject = '';
                state.text = '';
            }
        }
    });

export const {
    setFrom,
    setSubject,
    setText,
    resetForm
} = contactFormSlice.actions;

const contactReducer = combineReducers({
    contact: sendEmailSlice.reducer,
    form: contactFormSlice.reducer
});

export default contactReducer;