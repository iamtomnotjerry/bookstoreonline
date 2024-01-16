import React from 'react';
import { Button } from '@/app/components/ui/Button';
import { CartData } from '../provider/index';

export default function Thanhtoan({ selected }: { selected: CartData[] }) {
  return (
    <div className="sticky max-lg:left-0 max-lg:bottom-0 lg:top-20 max-lg:bg-donkey-brown-100 max-h-40 bg-white col-span-full lg:col-span-3 px-4 py-3 rounded-xl">
      <p className="font-semibold mb-2">
        Thanh toán ({selected.length} sản phẩm)
      </p>
      <hr className="mb-2" />
      <div className="relative">
        <span className="text-sm mt-2">Tổng số tiền</span>
        <p className="text-center text-lg text-ferra-700 font-bold float-right mb-4">
          {selected
            .reduce(
              (acc, cur) =>
                acc +
                (cur.book.price
                  ? (cur.book.price - cur.book.discount) * cur.count
                  : 100000 * cur.count),
              0,
            )
            .toLocaleString()}
        </p>
      </div>
      <Button className="w-full">Thanh toán</Button>
    </div>
  );
}
