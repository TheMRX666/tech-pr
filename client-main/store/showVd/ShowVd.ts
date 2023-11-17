import { createSlice } from '@reduxjs/toolkit'

export interface ShowVd {
  value: boolean
}

const initialState: ShowVd = {
  value: false,
}

export const ShowVdSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    ShowVdButton: (state) => {
        state.value = !state.value;
    }
  },
})

export const { ShowVdButton } = ShowVdSlice.actions

export default ShowVdSlice.reducer