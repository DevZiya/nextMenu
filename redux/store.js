import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import categorieReducer from './categorieReducer'
import searchReducer from './searchReducer'

export const store = configureStore({
  reducer: {
      category:categorieReducer,
      search:searchReducer  
  },
})

const makeStore = () => store
export const wrapper = createWrapper(makeStore)