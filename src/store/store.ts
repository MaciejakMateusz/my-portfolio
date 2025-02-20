import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contributionsReducer from "../slices/contributionsSlice.ts";
import airQualityReducer from "../slices/airQualitySlice.ts";

const rootReducer = combineReducers({
    contributions: contributionsReducer,
    airQuality: airQualityReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;