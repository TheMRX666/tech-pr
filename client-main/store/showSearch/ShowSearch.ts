import { createSlice } from '@reduxjs/toolkit'

export interface ShowSearch {
  value: boolean
}

const initialState: ShowSearch = {
  value: false,
}

export const ShowSearchSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    ShowSearchButton: (state) => {
        state.value = !state.value;
    }
  },
})

export const { ShowSearchButton } = ShowSearchSlice.actions

export default ShowSearchSlice.reducer