//2 Timothy 4:7: "I have fought the good fight, I have finished the race, I have kept the faith" (NIV)
import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "./reducers";

export const store = configureStore({
    reducer: TimerReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch