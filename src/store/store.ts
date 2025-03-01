import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contributionsReducer from "../slices/contributionsSlice.ts";
import airQualityReducer from "../slices/airQualitySlice.ts";
import contactReducer from "../slices/contactSlice.ts";
import toleranceMeasureReducer from "../slices/toleranceMeasureSlice.ts";

const rootReducer = combineReducers({
    contributions: contributionsReducer,
    airQuality: airQualityReducer,
    contact: contactReducer,
    toleranceMeasure: toleranceMeasureReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;