
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/slice'


export const createstore = () => {

  return configureStore({
    reducer: {
  
      getpricefiltervalue: counterSlice.reducer,
      getfiltercatagoryvalue: counterSlice.reducer
  
    },
  })

}



// Infer the type of makeStore
export type AppStore = ReturnType<typeof createstore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']