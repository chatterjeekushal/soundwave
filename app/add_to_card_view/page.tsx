
import { Suspense } from 'react'
import Add_to_card_full_page from '@/components/Add_to_card_full_page'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <Add_to_card_full_page />
    </Suspense>
  )
}
