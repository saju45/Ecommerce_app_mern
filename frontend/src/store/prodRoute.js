import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: "http://localhost:1000",
};

const prodSlice = createSlice({
  name: "link",
  initialState,
});

export default prodSlice.reducer;
