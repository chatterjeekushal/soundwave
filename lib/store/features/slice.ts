
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: any
}

const initialState: CounterState = {
  value: 0,
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

    // update add to card value
    getaddtocartvalue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { getpricefiltervalue, getaddtocartvalue, getfiltercatagoryvalue } = counterSlice.actions

export default counterSlice.reducer