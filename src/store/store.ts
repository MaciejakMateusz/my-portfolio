import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contributionsReducer from "../slices/contributionsSlice.ts";

const rootReducer = combineReducers({
    contributions: contributionsReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;