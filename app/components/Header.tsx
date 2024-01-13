"use client";

import { cn } from '@/lib/utils';
import {
  ArrowLeftStartOnRectangleIcon,
  DocumentTextIcon,
  IdentificationIcon,
  LockClosedIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import fonts from '../configs/fonts';
import routes from '../configs/routes';
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover';
import SearchBar from './SearchBar';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { push } = useRouter();
  return (
    <header className="lg:h-16 fixed inset-x-0 top-0 z-50 bg-white flex items-center flex-wrap">
      <Link href={routes.home} className="lg:hidden flex justify-center pt-2 basis-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={67}
          height={50}
          className="h-8"
        />
        <h1
          className={cn(
            fonts.logoFont.className,
            'text-2xl text-primary-700',
          )}
        >
          Bookstore
        </h1>
      </Link>
      <div className="container flex items-center justify-between">
        <Link href={routes.home} className="max-lg:hidden flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={67}
            height={50}
            className="h-8"
          />
          <h1
            className={cn(
              fonts.logoFont.className,
              'text-2xl text-primary-700',
            )}
          >
            Bookstore
          </h1>
        </Link>

        <SearchBar />

        <div className="flex items-center space-x-8">
          <Popover>
            <PopoverTrigger className="cursor-pointer flex items-center text-gray-500">
              <div className="inline-flex items-center text-gray-500">
                <UserCircleIcon className="h-6 mr-2" />
                <span className="font-semibold max-lg:hidden">Tài khoản</span>
              </div>
            </PopoverTrigger>
            <PopoverContent align="center" sideOffset={24} className="rounded-lg p-0 w-60">
              <div className="px-4 py-3">
                <p className="font-bold text-ferra-700">Admin</p>
                <p className="text-sm text-red-700">Quản trị viên</p>
              </div>
              <hr />
              <div className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-ferra-400 text-sm duration-300 text-gray-500 hover:text-white">
                <IdentificationIcon className="h-5" />
                Hồ sơ
              </div>
              <hr />
              <div className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-ferra-400 text-sm duration-300 text-gray-500 hover:text-white">
                <DocumentTextIcon className="h-5" />
                Lịch sử mua hàng
              </div>
              <hr />
              <Link
                href="/admin/products"
                className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-casal-500 text-sm duration-300 text-gray-500 hover:text-white"
              >
                <LockClosedIcon className="h-5" />
                Quản lý
              </Link>
              <hr />
              <div className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-red-400 text-sm duration-300 text-gray-500 hover:text-white rounded-bl-lg rounded-br-lg">
                <ArrowLeftStartOnRectangleIcon className="h-5" />
                Đăng xuất
              </div>
            </PopoverContent>
          </Popover>
          
          {/* <Popover>
            <PopoverTrigger className="cursor-pointer flex items-center text-gray-500">
              <div className="inline-flex items-center text-gray-500">
                <UserCircleIcon className="h-6 mr-2" />
                <span className="font-semibold max-lg:hidden">Tài khoản</span>
              </div>
            </PopoverTrigger>
            <PopoverContent align="center" sideOffset={24} className="rounded-lg p-0 w-60">
              <div className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-ferra-400 text-sm duration-300 text-gray-500 hover:text-white rounded-tl-lg rounded-tr-lg">
                <ArrowRightEndOnRectangleIcon className="h-5" />
                Đăng nhập
              </div>
              <hr />
              <div className="flex gap-2 px-4 py-3 cursor-pointer hover:bg-ferra-400 text-sm duration-300 text-gray-500 hover:text-white rounded-bl-lg rounded-br-lg">
                <UserPlusIcon className="h-5" />
                Đăng ký
              </div>
            </PopoverContent>
          </Popover> */}

          <Link
            href={routes.cart}
            className="inline-flex items-center text-gray-500"
          >
            <ShoppingCartIcon className="h-6 mr-2" />
            <span className="font-semibold max-lg:hidden">Giỏ hàng</span>
            <span className="bg-casal-700 text-white font-semibold text-xs leading-4 ml-2 px-1.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}