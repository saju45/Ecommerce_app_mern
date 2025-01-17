import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    editCategory: (state, action) => {
      console.log("call editCategory ");

      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    removeCategory: (state) => {
      console.log("call removedCategory ");

      state.name = "";
      state.id = "";
    },
  },
});

export const { editCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
