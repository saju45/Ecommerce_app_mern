import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: "https://ecommerce-app-backend-z90u.onrender.com",
};

const prodSlice = createSlice({
  name: "link",
  initialState,
});

export default prodSlice.reducer;
