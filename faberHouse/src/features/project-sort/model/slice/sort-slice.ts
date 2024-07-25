import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortScheme } from "../types";

const initialState: ISortScheme = {
  classQueryString: "",
  sortQueryString: "",
  queryString: "",
  selectIndexClass: 0,
};

const spliceQueryString = (queries: string[]) => {
  const cleanedArray = queries.filter((item) => item.trim() !== "");
  const result = cleanedArray.join("&");

  return `${result !== "" ? `&${result}` : ``}`;
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeClassQueryString: (state, action: PayloadAction<string>) => {
      state.classQueryString = action.payload;
      state.queryString = spliceQueryString([state.classQueryString, state.sortQueryString]);
    },
    changeSortQueryString: (state, action: PayloadAction<string>) => {
      state.sortQueryString = action.payload;
      state.queryString = spliceQueryString([state.classQueryString, state.sortQueryString]);
    },
    changeSelectIndexClass: (state, action: PayloadAction<number>) => {
      state.selectIndexClass = action.payload;
    },
  },
});

export const sortReducer = sortSlice.reducer;
export const { changeClassQueryString, changeSortQueryString, changeSelectIndexClass } = sortSlice.actions;
