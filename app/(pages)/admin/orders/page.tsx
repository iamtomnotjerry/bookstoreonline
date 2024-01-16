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

export default function page() {
    const [createModal, setCreateModal] = React.useState(false);
    return (
    <div className="container grid grid-cols-7 gap-4">
        <div className="col-span-1 max-lg:col-span-7 bg-white rounded-lg max-h-48">
            <SideBar />
        </div>
        <div className="col-span-6 max-lg:col-span-7">
            <span className="text-sm font-semibold text-ferra-700">
                Home / Admin / Orders
            </span>
            <div className="bg-white w-full rounded-lg">
              <DataTable columns={order_columns} data={data} />
            </div>
        </div>
    </div>
  )
}


