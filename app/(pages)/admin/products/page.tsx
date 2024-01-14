'use client';

import ProductsTable from '@/app/components/ProductsTable';
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

import { Button } from '@/app/components/ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import fonts from '@/app/configs/fonts';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';

const categoriesList = [
  {
    name: 'Tiểu thuyết',
  },
  {
    name: 'Truyện tranh',
  },
  {
    name: 'Kinh tế',
  },
  {
    name: 'Khoa học',
  },
  {
    name: 'Văn học',
  },
  {
    name: 'Lịch sử',
  },
  {
    name: 'Thiếu nhi',
  },
  {
    name: 'Sách giáo khoa',
  },
  {
    name: 'Sách tham khảo',
  },
  {
    name: 'Sách ngoại ngữ',
  },
  {
    name: 'Sách chuyên ngành',
  },
  {
    name: 'Sách kỹ năng sống',
  },
];

export default function page() {
  const [createModal, setCreateModal] = React.useState(false);
  return (
    <div className="container grid grid-cols-7 gap-4">
      <div className="col-span-1 bg-white rounded-lg max-h-48">
        <div className="flex justify-center items-center py-3">
          <Image
            src="/logo.svg"
            alt="logo"
            width={67}
            height={50}
            className="w-8"
          />
          <h1
            className={cn(
              fonts.logoFont.className,
              'text-2xl text-primary-700',
            )}
          >
            Admin
          </h1>
        </div>
        <hr />
        <div className="px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 border-ferra-700 cursor-pointer">
          Products
        </div>
        <hr />
        <div className="px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 border-transparent cursor-pointer">
          Orders
        </div>
        <hr />
        <div className="px-4 py-2 hover:bg-ferra-400 hover:text-white duration-300 border-l-8 border-transparent cursor-pointer">
          Categories
        </div>
        <hr />
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
                  {categoriesList.map((d, i) => {
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
            <Button size="xs" className="right-0">
              <PlusIcon className="h-5" />
            </Button>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
}
