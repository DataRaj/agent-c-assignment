// redux/formSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async action for form submission using createAsyncThunk
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = await fetch("http://example.domain/dev/v1/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state for the form slice
const initialState = {
  isLoading: false,
  isSubmitted: false,
  error: null,
};

// Create the form slice
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    resetFormState: (state) => {
      state.isSubmitted = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.isLoading = true;
        state.isSubmitted = false;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isSubmitted = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isLoading = false;
        state.isSubmitted = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

// Export the reset action and reducer
export const { resetFormState } = formSlice.actions;
export default formSlice.reducer;
