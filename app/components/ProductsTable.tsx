"use client";

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "./ui/Checkbox"
import { ArrowUpDown } from "lucide-react"
import { DataTable } from "./ui/DataTable"
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type Products = {
    id: number,
    title: string,
    quantity: number,
    price: number,
    discount: boolean,
    discountPercent: number,
    imageUrl: string,
}

const columns: ColumnDef<Products>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox 
                className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm"
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox 
                className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm"
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "imageUrl",
        header: "Cover",
        cell: ({ row }) => <Image alt="" width={80} height={80} src={row.getValue("imageUrl")} />,
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Stock
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Price
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => {
            const product = row.original;
            if (product.discountPercent == 0) return <p>{product.price.toLocaleString("vi-VN")} đ</p>
            return (
                <>
                    <p>{((product.price * (100 - product.discountPercent) / 100) * product.quantity).toLocaleString("vi-VN")} đ</p>
                    <p className="line-through text-gray-400">{product.price.toLocaleString("vi-VN")} đ</p>
                </>
            )
        },
    },
    {
        accessorKey: "discountPercent",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Discount
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("discountPercent")}%</div>,
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            const product = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Link href={`/books/${product.id}`}>
                        <EyeIcon className="h-6 text-gray-500 hover:text-ferra-700" />
                    </Link>
                    <Link href={`/books/${product.id}`}>
                        <PencilSquareIcon className="h-6 text-gray-500 hover:text-casal-700" />
                    </Link>
                    <Link href={`/books/${product.id}`}>
                        <TrashIcon className="h-6 text-gray-500 hover:text-red-700" />
                    </Link>
                </div>
            )
        },
    },
]

const data = [
    {
        id: 1,
        title: "Dr.Stone - Tập 23: Động cơ của tương lai",
        price: 23750,
        discount: false,
        discountPercent: 0,
        quantity: 2,
        imageUrl: "https://cdn0.fahasa.com/media/catalog/product/d/r/dr.-stone_bia_tap-23.jpg",
    },
    {
        id: 2,
        title: "Gửi Cậu Một Cái Ôm Vì Đã Không Bỏ Cuộc",
        price: 96000,
        discount: false,
        discountPercent: 27,
        quantity: 1,
        imageUrl: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786044784694.jpg",
    },
    {
        id: 3,
        title: "Và Khi Lạc Lối - Còn Tình Thương Ở Lại",
        price: 69000,
        discount: true,
        discountPercent: 10,
        quantity: 1,
        imageUrl: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786043717549_1.jpg",
    },
  ]

export default function ProductsTable() {
    return (
        <DataTable columns={columns} data={data} />
    )
}