import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import axios from 'axios';
import { ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import ProductCreateModal from '../components/AdminProductCreateModal';
import { Checkbox } from '../components/ui/Checkbox';
import { IBook } from '../models/book';

type Status = 'pending' | 'delivered' | 'cancelled';

type Orders = {
  id: string;
  quantity: number;
  date: number;
  sum_price: number;
  status: Status;
};

export const product_columns: ColumnDef<IBook>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
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
    accessorKey: 'coverImage',
    header: 'Ảnh bìa',
    cell: ({ row }) => {
      const imageSrc =
        row.original.imageUrl !== undefined
          ? row.original.imageUrl
          : row.original.coverImage;
      return <Image alt="" width={80} height={80} src={imageSrc} />;
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tiêu đề
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Có sẵn
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const product = row.original;
      return <p>{product.stock || 100}</p>;
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Đơn giá
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const product = row.original;
      return (
        <p>
          {product.price ? product.price.toLocaleString('vi-VN') : 100000} đ
        </p>
      );
      // if (product.discountPercent == 0) return <p>{product.price.toLocaleString("vi-VN")} đ</p>
      // return (
      //     <>
      //         <p>{((product.price * (100 - product.discountPercent) / 100) * product.quantity).toLocaleString("vi-VN")} đ</p>
      //         <p className="line-through text-gray-400">
      //             {product.price !== undefined ? product.price.toLocaleString("vi-VN") + " đ" : "0 đ"}
      //         </p>
      //     </>
      // )
    },
  },
  // {
  //     accessorKey: "discountPercent",
  //     header: ({ column }) => {
  //         return (
  //         <div
  //             className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
  //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //             Giảm giá
  //             <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </div>
  //         )
  //     },
  //     cell: ({ row }) => <div>{row.getValue("discountPercent")}%</div>,
  // },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => {
      const queryClient = useQueryClient();

      const { mutate } = useMutation({
        mutationFn: (id: string) => axios.delete(`/api/books/${id}`),
        onSuccess: () => {
          toast.success('Xóa sách thành công');
          queryClient.invalidateQueries({ queryKey: ['books'] });
        },
        onError: () => {
          toast.error('Xóa sách thất bại');
        },
      });

      const product = row.original;

      return (
        <div className="flex items-center gap-2">
          <Link href={`/books/${product._id}`}>
            <EyeIcon className="h-6 text-gray-500 hover:text-ferra-700" />
          </Link>

          <ProductCreateModal defaultValues={product} action="update">
            <PencilIcon className="w-5 text-gray-500 hover:text-ferra-700" />
          </ProductCreateModal>

          <button onClick={() => mutate(product._id)}>
            <TrashIcon className="h-6 text-gray-500 hover:text-red-700" />
          </button>
        </div>
      );
    },
  },
];

export const order_columns: ColumnDef<Orders>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        className="h-5 w-5 border-gray-500 border-opacity-80 data-[state=checked]:bg-ferra-700 rounded-sm"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
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
    accessorKey: 'id',
    header: 'Mã đơn',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Số lượng
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue('quantity')}</div>,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Ngày mua
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'sum_price',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Thành tiền
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue('sum_price')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer font-semibold hover:text-ferra-700"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Trạng thái
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="flex items-center gap-2">
          <Link href={`/books/${product.id}`}>
            <EyeIcon className="h-6 text-gray-500 hover:text-ferra-700" />
          </Link>
          <Link href={`/books/${product.id}`}>
            <TrashIcon className="h-6 text-gray-500 hover:text-red-700" />
          </Link>
        </div>
      );
    },
  },
];
