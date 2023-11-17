import { createSlice } from '@reduxjs/toolkit'

export interface ChouseGroup {
  value: string
}

const initialState: ChouseGroup = {
  value: '111',
}

export const GroupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    GroupButton: (state, action) => {
        state.value = action.payload;
    }
  },
})

export const { GroupButton } = GroupSlice.actions

export default GroupSlice.reducer