import { createSlice } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: false,
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleButton: (state) => {
        state.value = !state.value;
    }
  },
})

export const { toggleButton } = toggleSlice.actions

export default toggleSlice.reducer