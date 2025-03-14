import {combineReducers, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GenericState} from "../interfaces/GenericState.ts";
import {ContactFormFields} from "../interfaces/ContactFormFields.ts";

const initialFetchState: GenericState = {
    isLoading: false,
    data: undefined,
    error: undefined
};

const initialFormState: ContactFormFields = {
    from: '',
    subject: '',
    text: ''
};

export const sendEmail =
    createAsyncThunk<void, ContactFormFields>(
        'contact/sendEmail',
        async (params, {rejectWithValue}) => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PORTFOLIO_REST}/email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(params)
                });

                if (!response.ok) {
                    return rejectWithValue(response.status.toString());
                }

                try {
                    return await response.json();
                } catch (error: any) {
                    return {};
                }
            } catch (error: any) {
                return rejectWithValue('restApiDown');
            }
        });

export const sendEmailSlice = createSlice(
    {
        name: 'sendEmail',
        reducerPath: undefined,
        selectors: undefined,
        initialState: initialFetchState,
        reducers: {
            setData: (state, action) => {
                state.data = action.payload;
            }
        },
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

export const {setData} = sendEmailSlice.actions

const contactReducer = combineReducers({
    contact: sendEmailSlice.reducer,
    form: contactFormSlice.reducer
});

export default contactReducer;