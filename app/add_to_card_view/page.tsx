
'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

function Page() {
  const searchParams = useSearchParams()

  const productid = searchParams.get('product_id')
  const product_details = searchParams.get('product_details')

  useEffect(() => {
    let isMounted = true // ✅ ensures component is still active
    const controller = new AbortController() // ✅ cancel API call if needed

    const sendToApi = async () => {
      if (!productid || !product_details) return

      try {
        const response = await axios.post(
          `/api/addtocard?product_id=${productid}&product_details=${product_details}`,
          {},
          { signal: controller.signal }
        )
        if (isMounted) {
          console.log('Response:', response.data)
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('API call cancelled')
        } else {
          console.error('Error:', error)
        }
      }
    }

    sendToApi()

    return () => {
      isMounted = false
      controller.abort() // ✅ clean up on unmount or rerun
    }
  }, [productid, product_details])

  return (
    <div>
      <h1>This is the cart view page</h1>
    </div>
  )
}

export default Page
