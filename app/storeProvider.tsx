
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore } from '../lib/store/store'
import { createstore } from '../lib/store/store'
import { getpricefiltervalue } from '@/lib/store/features/slice'
import { get } from 'http'
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createstore()
    storeRef.current = createstore()
  }

  // add inisial state

  // storeRef.current.dispatch(getpricefiltervalue('all'))
 

  return <Provider store={storeRef.current}>{children}</Provider>
}