import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOfferScheme } from "../types";

const initialState: IOfferScheme = {
  form: {
    fileBase64: "",
    name: "",
    phone: "",
  },
  isErrorFile: false,
  isErrorName: false,
  isErrorPhone: false,
  isErrors: false,
};

const projectOfferSlice = createSlice({
  name: "projectOffer",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.form.name = action.payload;
    },

    setPhone: (state, action: PayloadAction<string>) => {
      state.form.phone = action.payload;
    },

    setFile: (state, action: PayloadAction<string>) => {
      state.form.fileBase64 = action.payload;
    },

    clearForm: (state) => {
      state.form = {
        name: "",
        fileBase64: "",
        phone: "",
      };
    },

    checkForm: (state) => {
      const form = state.form;

      state.isErrorName = !Boolean(form.name);
      state.isErrorPhone = !Boolean(form.phone);
      state.isErrorFile = !Boolean(form.fileBase64);

      if (state.isErrorFile && state.isErrorName && state.isErrorPhone) {
        state.isErrors = true;
      } else {
        state.isErrors = false;
      }
    },
  },
});

export const projectOfferReducer = projectOfferSlice.reducer;
export const { setFile, setName, setPhone, checkForm } = projectOfferSlice.actions;
