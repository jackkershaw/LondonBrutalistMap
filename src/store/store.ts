import { configureStore } from "@reduxjs/toolkit";
import buildingReducer from "./buildingSlice";

export const store = configureStore({
  reducer: {
    buildings: buildingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
