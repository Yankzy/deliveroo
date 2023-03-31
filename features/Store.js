import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './restaurantSlice';
import basketReducer from './basketSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export default store;