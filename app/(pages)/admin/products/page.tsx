'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/Select';

import SideBar from '@/app/components/AdminSideBar';
import { DataTable } from '@/app/components/ui/DataTable';
import { product_columns } from '@/app/lib/data-columns';
import ProductCreateModal from '@/app/components/AdminProductCreateModal';
import categories from '@/app/data/categories.json';

const data = [
  {
    id: 1,
    title: 'Dr.Stone - Tập 23: Động cơ của tương lai',
    price: 23750,
    discount: false,
    discountPercent: 0,
    quantity: 2,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg',
  },
  {
    id: 2,
    title: 'Gửi Cậu Một Cái Ôm Vì Đã Không Bỏ Cuộc',
    price: 96000,
    discount: false,
    discountPercent: 27,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/9/7/9786044784694.jpg',
  },
  {
    id: 3,
    title: 'Và Khi Lạc Lối - Còn Tình Thương Ở Lại',
    price: 69000,
    discount: true,
    discountPercent: 10,
    quantity: 1,
    imageUrl:
      'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043717549_1.jpg',
  },
];

export default function page() {
  const [createModal, setCreateModal] = React.useState(false);
  return (
    <div className="container grid grid-cols-7 gap-4">
      <div className="col-span-1 bg-white rounded-lg max-h-48">
        <SideBar />
      </div>
      <div className="col-span-6">
        <span className="text-sm font-semibold text-ferra-700">
          Home / Admin / Products
        </span>
        <div className="bg-white w-full px-4 py-3 rounded-lg mb-4 flex gap-2 justify-between">
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="h-8 w-16">
                <SelectValue placeholder="5" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Hiển thị</SelectLabel>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-8 w-48">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Danh mục</SelectLabel>
                  {categories.map((d, i) => {
                    return (
                      <SelectItem value={`${i}`} key={i}>
                        {d.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Tìm kiếm sách..."
              className="bg-transparent outline-none text-sm border px-4 rounded-md flex-1"
            />
            <ProductCreateModal />
          </div>
        </div>
        <div className="bg-white w-full rounded-lg">
          <DataTable columns={product_columns} data={data} />
        </div>
      </div>
    </div>
  );
}
