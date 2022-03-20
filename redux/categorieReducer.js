import { createSlice } from '@reduxjs/toolkit'



export const categorySlice = createSlice({
  name: 'category',
  initialState:{
    cat:"Səhər Yeməyi"
  },
  reducers: {
  getCategory:(state,action)=>{
      state.cat = action.payload
  }
  },
})

export const { getCategory } = categorySlice.actions

export default categorySlice.reducer