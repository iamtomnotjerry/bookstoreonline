import Image from 'next/image';
import { Badge } from './ui/Badge';
import Link from 'next/link';
import { IBook } from '../models/book';

export default function FlashSaleBookCard({ book }: { book: IBook }) {
  return (
    <div className="bg-white transition hover:shadow-lg rounded-[0.625rem] overflow-hidden p-4">
      <Link href={'/books/' + book._id} className="block aspect-w-1 aspect-h-1">
        <Image
          alt=""
          src={book.coverImage || book.imageUrl}
          width={200}
          height={200}
          className="w-full object-contain"
        />
      </Link>

      <div className="mt-3">
        <h3 className="font-semibold leading-5">
          <Link href={'/books/' + book._id} className="line-clamp-2">
            {book.title}
          </Link>
        </h3>

        <div className="flex items-center mt-2">
          <span className="text-primary-700 font-bold text-lg">
            {((book.price || 100000) - (book.discount ?? 1000)).toLocaleString(
              'vi-VN',
            )}
            đ
          </span>
          <Badge size="sm" className="ml-2">
            -{book.price ? Math.ceil((book.discount / book.price) * 100) : 0}%
          </Badge>
        </div>

        <span className="text-tower-gray-300 line-through font-semibold">
          {(book.price || 100000).toLocaleString('vi-VN')}đ
        </span>

        <div className="h-3 bg-tower-gray-300 mt-3 relative rounded-full">
          <div
            style={{
              width: '20%',
            }}
            className="h-3 rounded-full bg-casal-700"
          ></div>
          <span className="absolute text-[0.625rem] font-semibold text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            10 đã bán
          </span>
        </div>
      </div>
    </div>
  );
}
