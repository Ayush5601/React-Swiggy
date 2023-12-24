import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantSlice,
  },
});

export default store;

/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 **/
