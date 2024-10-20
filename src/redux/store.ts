import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";  // Import the formSlice reducer

// Create the Redux store and add the form slice reducer
const store = configureStore({
  reducer: {
    form: formReducer,  // Add formReducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // This disables the serializable check if needed for complex async data
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
