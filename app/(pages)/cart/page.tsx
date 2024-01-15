'use client'

import React from 'react'

import Thanhtoan from '@/app/components/ui/thanhtoan'
import OrderDetail from '@/app/components/ui/OrderDetail'


export default function CartPage() {

  
  return (
    <div className="max-lg:p-0 container">
      <span className="text-sm font-semibold text-ferra-700">
        Home / Cart / Checkout
      </span>
      <div className="grid grid-cols-9 gap-4">
        <OrderDetail/>
        <Thanhtoan/>
      </div>
    </div>
  )
}
