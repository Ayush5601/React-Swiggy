import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addRestaurants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
