import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "./reducers";

export const store = configureStore({
    reducer: TimerReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch