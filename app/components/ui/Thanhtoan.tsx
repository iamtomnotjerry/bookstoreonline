import React from 'react'
import { Button } from '@/app/components/ui/Button'


export default function Thanhtoan() {
  return (
    <div className="sticky max-lg:left-0 max-lg:bottom-0 lg:top-20 max-lg:bg-donkey-brown-100 max-h-40 bg-white col-span-full lg:col-span-3 px-4 py-3 rounded-xl">
          <p className="font-semibold mb-2">Thanh toán</p>
          <hr className="mb-2" />
          <div className="relative">
            <span className="text-sm mt-2">Tổng số tiền</span>
            <p className="text-center text-lg text-ferra-700 font-bold float-right mb-4">47.500 đ</p>
          </div>
          <Button className="w-full">
            Thanh toán
          </Button>
        </div>
  )
}
