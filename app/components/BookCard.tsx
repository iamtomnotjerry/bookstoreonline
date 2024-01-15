import Image from 'next/image';
import { Badge } from './ui/Badge';
import Link from 'next/link';
import Stars from './Stars';

interface Book {
  _id: string;
  title: string;
  imageUrl: string;
  author: string;
  // Add other properties as needed
}

export default function BookCard({ book }: { book: Book }) {
  // Check if all specified properties of book are defined before rendering
  if (!book || !book._id || !book.title || !book.imageUrl || !book.author) {
    return null; // Or return a placeholder or loading state
  }

  return (
    <div className="bg-white transition hover:shadow-lg rounded-[0.625rem] overflow-hidden p-4">
      <Link href={`/books/${book._id}`}className="block aspect-w-1 aspect-h-1">
        <Image
          alt=""
          src={book.imageUrl} // Use the imageUrl from the book object
          width={200}
          height={200}
          className="w-full object-contain"
        />
      </Link>

      <div className="mt-3">
        <h3 className="font-semibold leading-5 transition hover:text-primary-700">
          <Link href={`/books/${book._id}`}>{book.title}</Link>
        </h3>

        <div className="flex items-center mt-2">
          <span className="text-primary-700 font-bold text-lg">75.000đ</span>
          <Badge size="sm" className="ml-2">
            -10%
          </Badge>
        </div>

        <span className="text-tower-gray-300 line-through font-semibold">
          100.000đ
        </span>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-700">Đã bán 245</span>

          <Stars value={3.5} className="text-sm" />
        </div>
      </div>
    </div>
  );
}
