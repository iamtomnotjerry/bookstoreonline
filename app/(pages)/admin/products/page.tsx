'use client';

import React from 'react'
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
import { useState, useEffect } from 'react';

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

interface Book {
  _id: string;
  id: number,
  title: string;
  author: string;
  genre?: string;
  description?: string;
  price: number;
  stock?: number;
  imageUrl: string;
  coverImage: string;
}
export default function AdminProductPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      const booksArray = Array.isArray(data.books) ? data.books : [];
      setBooks(booksArray);
      // Initially display the first 15 books
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container grid grid-cols-7 gap-4">
        <div className="col-span-1 max-lg:col-span-7 bg-white rounded-lg max-h-48">
            <SideBar />
        </div>
        <div className="col-span-6 max-lg:col-span-7">
            <span className="text-sm font-semibold text-ferra-700">
                Home / Admin / Products
            </span>
            <div className="bg-white w-full px-4 py-3 rounded-lg mb-4 flex gap-2 justify-between">
                <div className="flex gap-2">
                    <Select>
                        <SelectTrigger className="h-8 w-48">
                            <SelectValue placeholder="Danh mục" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Danh mục</SelectLabel>
                            {
                                categoriesList.map((d,i) => {
                                  return (
                                    <SelectItem value={`${i}`} key={i}>{d.name}</SelectItem>
                                  )
                                })
                            }
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
            <div className="bg-white w-full pb-2 rounded-lg">
              <DataTable columns={product_columns} data={books} />
            </div>
        </div>
    </div>
  );
}
