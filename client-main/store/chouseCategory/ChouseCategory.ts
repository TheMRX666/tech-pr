import { createSlice } from '@reduxjs/toolkit'

export interface ChouseCategory {
  value: number
}

const initialState: ChouseCategory = {
  value: 1,
}

export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    CategoryButton: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { CategoryButton } = CategorySlice.actions

export default CategorySlice.reducer