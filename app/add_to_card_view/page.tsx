
'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from "next/navigation"
import axios from "axios"

function Page() {
  const searchParams = useSearchParams()

  const productid = searchParams.get("product_id")
  const product_details = searchParams.get("product_details")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `/api/add_to_card?product_id=${productid}&product_details=${product_details}`
        )
        console.log("Response:", response.data)
      } catch (error) {
        console.error("Error:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>This is the cart view page</h1>
    </div>
  )
}

export default Page
