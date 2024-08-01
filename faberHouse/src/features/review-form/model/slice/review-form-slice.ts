import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReviewFormScheme } from "../types";

const initialState: IReviewFormScheme = {
  comment: "",
  name: "",
  isCommentError: false,
  isNameError: false,
  isErrors: false,
};

const reviewFormSlice = createSlice({
  name: "reviewForm",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },

    clearForm: (state) => {
      state.comment = "";
      state.name = "";
    },

    checkForm: (state) => {
      state.isNameError = !Boolean(state.name);
      state.isCommentError = !Boolean(state.comment);

      if (!state.isNameError && !state.isCommentError) {
        state.isErrors = false;
      } else {
        state.isErrors = true;
      }
    },
  },
});

export const reviewFormReducer = reviewFormSlice.reducer;
export const { setComment, setName, checkForm, clearForm } = reviewFormSlice.actions;
