import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    placeHolder: null,
    name: null,
    description: null,
    rating: null,
    delivery_time: null,
    delivery_fee: null,
    distance: null,
    category: null,
    address: null,
    dishes: null,
    reviews: null,
    long: null,
    lat: null,
  },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;