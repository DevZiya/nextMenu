import { createSlice } from '@reduxjs/toolkit'



export const searchSlice = createSlice({
  name: 'search',
  initialState:{
    value:""
  },
  reducers: {
  searchName:(state,action)=>{
      state.value = action.payload
  }
  },
})

export const { searchName } = searchSlice.actions

export default searchSlice.reducer