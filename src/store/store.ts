import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./reducers/hotelReducer";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
