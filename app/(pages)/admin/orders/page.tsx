"use client";

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/Select"

import { Button } from '@/app/components/ui/Button'
import SideBar from '@/app/components/AdminSideBar';
import { DataTable } from '@/app/components/ui/DataTable';
import { order_columns } from '@/app/lib/data-columns';
import { PlusIcon } from '@heroicons/react/24/outline';

const data = [
    {
        id: '#1',
        quantity: 2,
        date: 1705226276,
        sum_price: 123000,
        status: 'delivered',
    },
    {
        id: '#2',
        quantity: 1,
        date: 1705226276,
        sum_price: 47500,
        status: 'pending',
    },
]

export default function AdminOrderPage() {
    const [createModal, setCreateModal] = React.useState(false);
    return (
    <div className="container grid grid-cols-7 gap-4">
        <div className="col-span-1 bg-white rounded-lg max-h-48">
            <SideBar />
        </div>
        <div className="col-span-6">
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
              {/* <DataTable columns={order_columns} data={data} /> */}
            </div>
        </div>
    </div>
  )
}


