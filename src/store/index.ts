import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../containers/services/api'
import { getDefaultSettings } from 'http2'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
