import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchTerm: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
    },

    removeSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export default userSlice.reducer;
export const { searchTermUpdated, removeSearchTerm } = userSlice.actions;
