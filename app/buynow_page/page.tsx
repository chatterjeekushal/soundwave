
import React from 'react';
import { Suspense } from 'react'
import Buynow_page from '@/components/Buynow_page'
const OrderSummary = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Buynow_page />
    </Suspense>
  );
};

export default OrderSummary;
