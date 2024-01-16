'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/Select';
import React from 'react';

import SideBar from '@/app/components/AdminSideBar';
import { Button } from '@/app/components/ui/Button';
import { DataTable } from '@/app/components/ui/DataTable';
import { order_columns } from '@/app/lib/data-columns';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IOrder } from '@/app/models/order';
import { IBook } from '@/app/models/book';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => axios.get<{ orders: IOrder<IBook>[] }>('/api/orders'),
  });

  const orders = data?.data.orders;

  return (
    orders && (
      <div className="container grid grid-cols-7 gap-4">
        <div className="col-span-1 max-lg:col-span-7 bg-white rounded-lg max-h-48">
          <SideBar />
        </div>
        <div className="col-span-6 max-lg:col-span-7">
          <span className="text-sm font-semibold text-ferra-700">
            Home / Admin / Orders
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
            <DataTable columns={order_columns} data={orders} />
          </div>
        </div>
      </div>
    )
  );
}
