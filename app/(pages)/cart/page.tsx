import { Button } from '@/app/components/ui/Button'
import { Checkbox } from '@/app/components/ui/Checkbox'
import { Input } from '@/app/components/ui/Input'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const carts = [
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: false,
    discountPercent: 0,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: false,
  },
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: true,
  },
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: true,
  },
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: true,
  },
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: true,
  },
  {
    title: "Dr.Stone - Tập 23: Động cơ của tương lai",
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    isChecked: true,
  },
]

export default function page() {
  return (
    <div className="max-lg:p-0 container">
      <span className="text-sm font-semibold text-ferra-700">
        Home / Cart / Checkout
      </span>
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-full lg:col-span-6 rounded-xl">
          <div className="flex bg-white px-4 py-3 rounded-xl mb-4">
            <div className="flex gap-2 basis-1/2">
              <Checkbox id="check-all" className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm" />
              <span className="text-sm">Chọn tất cả (%count%)</span>
            </div>
            <div className="max-lg:hidden flex justify-center gap-2 basis-1/5">
              <span className="text-sm">Số lượng</span>
            </div>
            <div className="max-lg:hidden flex justify-center gap-2 basis-1/5">
              <span className="text-sm">Thành tiền</span>
            </div>
          </div>
          <div className="bg-white px-4 py-4 rounded-xl">
          {
            carts.map((data,i) => {
              return (
                <div key={i}>
                  <div className="relative lg:flex align-middle">
                    <div className="flex items-center lg:basis-1/2">
                      <Checkbox id="check-all" checked={data.isChecked} className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm" />
                      <Image height={120} width={120} alt="" src="https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg" loading="lazy" />
                      <div className="lg:relative h-full">
                        <p className="absolute top-0 lg:relative text-sm">{data.title}</p>
                        <div className="absolute flex gap-2 items-center lg:bottom-2">
                          { data.discount ? (
                            <>
                            <span className="font-semibold">{(data.price * (100 - data.discountPercent) / 100).toLocaleString("vi-VN")} đ</span>
                            <span className="text-xs text-gray-500 line-through">{data.price.toLocaleString("vi-VN")} đ</span>
                            </>
                          ) : <span className="font-semibold">{data.price.toLocaleString("vi-VN")} đ</span>
                        }
                        </div>
                      </div>
                    </div>
                    <div className="max-lg:absolute max-lg:bottom-[-5px] max-lg:left-[140px] lg:bottom-0 lg:left-0 lg:flex lg:items-center lg:w-1/5">
                      <Input type="number" className="w-24 lg:w-16 m-auto" />
                    </div>
                    <div className="hidden lg:flex lg:items-center justify-center lg:w-1/5">
                      <span className="text-lg text-ferra-700 font-semibold">{((data.price * (100 - data.discountPercent) / 100) * data.quantity).toLocaleString("vi-VN")} đ</span>
                    </div>
                    <div className="absolute right-2 bottom-2 lg:relative lg:right-0 lg:bottom-0 lg:flex lg:items-center lg:justify-center">
                      <TrashIcon height={24} className="text-gray-500 hover:text-red-700 duration-300 cursor-pointer" />
                    </div>
                  </div>
                  { i < (carts.length - 1) ? <hr className="mt-4 mb-4" /> : ""}
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="max-lg:sticky max-lg:left-0 max-lg:bottom-0 max-lg:bg-donkey-brown-100 max-h-40 bg-white col-span-full lg:col-span-3 px-4 py-3 rounded-xl">
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
      </div>
    </div>
  )
}
