import { cn } from '@/lib/utils';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import fonts from '../configs/fonts';
import routes from '../configs/routes';
import { Button, buttonVariants } from './ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover';
import SearchBar from './SearchBar';

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

export default function Header() {
  return (
    <header className="h-16 bg-white flex items-center">
      <div className="container flex items-center justify-between">
        <Link href={routes.home} className="flex items-center">
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

        <Popover>
          <PopoverTrigger className="flex items-center text-gray-500">
            <SquaresPlusIcon className="h-7" />
            <ChevronDownIcon className="h-4 ml-1.5" />
          </PopoverTrigger>
          <PopoverContent align="start" sideOffset={24} className="w-[36rem]">
            <h3 className="font-semibold text-lg mb-4 text-primary-700">
              Danh mục sách
            </h3>

            <ul className="grid grid-cols-2 gap-4">
              {categoriesList.map(({ name }, index) => (
                <li key={index}>
                  <Link href={''} className="flex items-center">
                    <ChevronRightIcon className="h-5 mr-2" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-6">
              <Link
                href={''}
                className={buttonVariants({ variant: 'outline' })}
              >
                <span>Xem tất cả</span>
                <ArrowRightIcon className="h-4 ml-2" />
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        <SearchBar />

        <div className="flex items-center space-x-8">
          <button className="inline-flex items-center text-gray-500">
            <UserCircleIcon className="h-6 mr-2" />
            <span className="font-semibold">Tài khoản</span>
          </button>
          <Link
            href={routes.cart}
            className="inline-flex items-center text-gray-500"
          >
            <ShoppingCartIcon className="h-6 mr-2" />
            <span className="font-semibold">Giỏ hàng</span>
            <span className="bg-casal-700 text-white font-semibold text-xs leading-4 ml-2 px-1.5 rounded-full">
              0
            </span>
          </Link>
          S
        </div>
      </div>
    </header>
  );
}
