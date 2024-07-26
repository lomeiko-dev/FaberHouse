import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterScheme } from "../types";

const initialState: IFilterScheme = {
  filterString: "",
  fullFilterString: "",
  searchString: "",
};

const spliceQuery = (queries: string[]) => {
  let result = "";

  for (let i = 0; i < queries.length; i++) {
    result += `${queries[i]}${queries[i + 1] !== "" && queries[i + 1] !== undefined ? "&" : ""}`;
  }

  return result;
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterString: (state, action: PayloadAction<string>) => {
      state.filterString = action.payload;
      state.fullFilterString = spliceQuery([state.filterString, state.searchString]);
    },
    changeSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
      state.fullFilterString = spliceQuery([state.filterString, state.searchString]);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterString, changeSearchString } = filterSlice.actions;
