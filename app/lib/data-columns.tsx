import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../components/ui/Checkbox";
import Image from "next/image";
import { ArrowUpDown } from "lucide-react";
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

type Status = "pending" | "delivered" | "cancelled";

type Orders = {
    id: string,
    quantity: number,
    date: number,
    sum_price: number,
    status: Status,
}

export const product_columns: ColumnDef<Products>[] = [
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
        header: "Ảnh bìa",
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
                Tiêu đề
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
                Có sẵn
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
                Đơn giá
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
                Giảm giá
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("discountPercent")}%</div>,
    },
    {
        accessorKey: "action",
        header: "",
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

export const order_columns: ColumnDef<Orders>[] = [
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
        accessorKey: "id",
        header: "Mã đơn",
        cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Số lượng
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("quantity")}</div>,
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Ngày mua
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("date")}</div>,
    },
    {
        accessorKey: "sum_price",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Thành tiền
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div>{row.getValue("sum_price")}</div>,
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
            <div
                className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Trạng thái
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </div>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
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