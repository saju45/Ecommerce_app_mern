import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchTerm: "",
  category: "",
  brand: "",
  minPrice: 1,
  maxPrice: 9999999999,
  region: "",
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
    brandSelected: (state, action) => {
      state.brand = action.payload;
    },
    priceUpdate: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    regionUpdated: (state, action) => {
      console.log("region : ", action.payload);

      state.region = action.payload;
    },

    removeSearchTerm: (state) => {
      state.searchTerm = "";
    },
    removeCategory: (state) => {
      state.category = "";
    },
    removeBrand: (state) => {
      state.brand = "";
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
    removeRegion: (state) => {
      state.region = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  searchTermUpdated,
  categorySelected,
  brandSelected,
  removeRegion,
  regionUpdated,
  removeBrand,
  priceUpdate,
  removeSearchTerm,
  removeCategory,
  removePrice,
  removeAllFilters,
} = filterSlice.actions;
