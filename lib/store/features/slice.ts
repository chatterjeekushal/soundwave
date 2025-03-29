
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: 'all',
}

export const counterSlice = createSlice({
  name: 'pricefilter',
  initialState,
  reducers: {
    // Example reducer to update the value
    getpricefiltervalue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    // Add more reducers as needed
    getfiltercatagoryvalue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getpricefiltervalue, getfiltercatagoryvalue } = counterSlice.actions

export default counterSlice.reducer