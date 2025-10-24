
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type ContactState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  message: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setField(
      state,
      action: PayloadAction<{ field: keyof ContactState; value: string }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const { setField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
