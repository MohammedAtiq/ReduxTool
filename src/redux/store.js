import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import apiReducer from './ApiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Api: apiReducer,
  },
})
