'use client';

import { Button } from '@/app/components/ui/Button';
import { Checkbox } from '@/app/components/ui/Checkbox';
import { Input } from '@/app/components/ui/Input';
import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

const carts = [
  {
    id: 1,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: false,
    discountPercent: 0,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
  {
    id: 3,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
  {
    id: 4,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
  {
    id: 5,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
  {
    id: 6,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: true,
    discountPercent: 50,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
];

export default function Page() {
  const [items, setItems] = useState(carts);
  const [selected, setSelected] = useState<number[]>([]);

  function handleDelete(id: number) {
    setItems(items.filter((item) => id !== item.id));
  }

  return (
    <div className="max-lg:p-0 container">
      <span className="text-sm font-semibold text-ferra-700">
        Home / Cart / Checkout
      </span>
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-full lg:col-span-6 rounded-xl">
          <div className="flex bg-white px-4 py-3 rounded-xl mb-4">
            <div className="flex gap-2 lg:basis-1/2">
              <Checkbox
                onCheckedChange={(v) =>
                  setSelected(v ? carts.map(({ id }) => id) : [])
                }
                id="check-all"
                className="h-5 w-5"
              />
              <span className="text-sm">Chọn tất cả ({items.length})</span>
            </div>
            <div className="max-lg:hidden flex justify-center gap-2 basis-1/5">
              <span className="text-sm">Số lượng</span>
            </div>
            <div className="max-lg:hidden flex justify-center gap-2 basis-1/5">
              <span className="text-sm">Thành tiền</span>
            </div>
          </div>
          <div className="bg-white px-4 py-4 rounded-xl">
            {items.map((data, i) => {
              return (
                <div key={i}>
                  <div className="relative lg:flex align-middle">
                    <div className="flex items-center lg:basis-1/2">
                      <Checkbox
                        id="check-all"
                        className="h-5 w-5"
                        onCheckedChange={(v) =>
                          setSelected(
                            v
                              ? [...selected, data.id]
                              : selected.filter((id) => id !== data.id),
                          )
                        }
                        checked={selected.includes(data.id)}
                      />
                      <Image
                        height={120}
                        width={120}
                        alt=""
                        src="https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg"
                        loading="lazy"
                      />
                      <div className="lg:relative h-full">
                        <p className="absolute top-0 lg:relative text-sm">
                          {data.title}
                        </p>
                        <div className="absolute flex gap-2 items-center lg:bottom-2">
                          {data.discount ? (
                            <>
                              <span className="font-semibold">
                                {(
                                  (data.price * (100 - data.discountPercent)) /
                                  100
                                ).toLocaleString('vi-VN')}{' '}
                                đ
                              </span>
                              <span className="text-xs text-gray-500 line-through">
                                {data.price.toLocaleString('vi-VN')} đ
                              </span>
                            </>
                          ) : (
                            <span className="font-semibold">
                              {data.price.toLocaleString('vi-VN')} đ
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="max-lg:absolute max-lg:bottom-[-5px] max-lg:left-[140px] lg:bottom-0 lg:left-0 lg:flex lg:items-center lg:w-1/5">
                      <Input
                        type="number"
                        className="w-24 lg:w-16 m-auto"
                        value={data.quantity}
                        onChange={(e) => {
                          if (Number(e.target.value) < 1) {
                            handleDelete(data.id);
                          } else {
                            setItems(
                              items.map((c) =>
                                c.id === data.id
                                  ? { ...c, quantity: Number(e.target.value) }
                                  : c,
                              ),
                            );
                          }
                        }}
                      />
                    </div>
                    <div className="hidden lg:flex lg:items-center justify-center lg:w-1/5">
                      <span className="text-lg text-ferra-700 font-semibold">
                        {(
                          ((data.price * (100 - data.discountPercent)) / 100) *
                          data.quantity
                        ).toLocaleString('vi-VN')}{' '}
                        đ
                      </span>
                    </div>
                    <div
                      onClick={() => handleDelete(data.id)}
                      className="absolute right-2 bottom-2 lg:relative lg:right-0 lg:bottom-0 lg:flex lg:items-center lg:justify-center"
                    >
                      <TrashIcon
                        height={24}
                        className="text-gray-500 hover:text-red-700 duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                  {i < carts.length - 1 ? <hr className="mt-4 mb-4" /> : ''}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sticky max-lg:left-0 max-lg:bottom-0 lg:top-20 max-lg:bg-donkey-brown-100 max-h-40 bg-white col-span-full lg:col-span-3 px-4 py-3 rounded-xl">
          <p className="font-semibold mb-2">
            Thanh toán ({selected.length} sản phẩm)
          </p>
          <hr className="mb-2" />
          <div className="relative">
            <span className="text-sm mt-2">Tổng số tiền</span>
            <p className="text-center text-lg text-ferra-700 font-bold float-right mb-4">
              {selected
                .reduce((prev, cur) => {
                  const item = items.find((item) => item.id === cur);
                  if (!item) return prev;
                  return (
                    prev +
                    ((item.price * (100 - item.discountPercent)) / 100) *
                      item.quantity
                  );
                }, 0)
                .toLocaleString('vi-VN')}{' '}
              đ
            </p>
          </div>
          <Button className="w-full">Thanh toán</Button>
        </div>
      </div>
    </div>
  );
}
