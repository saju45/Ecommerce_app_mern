import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchTerm: "",
  category: "",
  minPrice: 1,
  maxPrice: 9999999999,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
    },
    categorySelected: (state, action) => {
      state.category = action.payload;
    },
    priceUpdate: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    removeSearchTerm: (state) => {
      state.searchTerm = "";
    },
    removeCategory: (state) => {
      state.category = "";
    },
    removePrice: (state) => {
      state.minPrice = 1;
      state.maxPrice = 9999999999;
    },

    removeAllFilters: (state) => {
      state.searchTerm = "";
      state.category = "";
      state.minPrice = 1;
      state.maxPrice = 9999999999;
    },
  },
});

export default filterSlice.reducer;
export const {
  searchTermUpdated,
  categorySelected,
  priceUpdate,
  removeSearchTerm,
  removeCategory,
  removePrice,
  removeAllFilters,
} = filterSlice.actions;
