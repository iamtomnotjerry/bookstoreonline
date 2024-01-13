// import Link from 'next/link';

import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Badge } from './ui/Badge';
import Link from 'next/link';
import Stars from './Stars';

// // Assuming Book is an interface with the necessary properties
// interface Book {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   author: string;
//   // Add other properties as needed
// }

// const BookCard: React.FC<{ book: Book }> = ({ book }) => {
//   return (

//     <Link href={`/books/${book._id}`}>
//       <div className="flex flex-col items-center rounded-xl overflow-hidden bg-white shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
//         <div className="h-48 overflow-hidden">
//           <img
//             className="w-full h-full object-cover"
//             src={book.imageUrl}
//             alt={book.title}
//           />
//         </div>
//         <div className="p-4 w-full">
//           <h3
//             className="text-xl font-bold mb-2 overflow-hidden overflow-ellipsis max-h-14 whitespace-normal text-gray-900 font-serif"
//           >
//             {book.title}
//           </h3>
//           <p className="text-gray-600">{book.author}</p>

//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BookCard;

export default function BookCard() {
  return (
    <div className="bg-white transition hover:shadow-lg rounded-[0.625rem] overflow-hidden p-4">
      <Link href={''} className="block aspect-w-1 aspect-h-1">
        <Image
          alt=""
          src="https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1-tr_n-l_n-m_i-nh_-_-kh_c-2.jpg"
          width={200}
          height={200}
          className="w-full object-contain"
        />
      </Link>

      <div className="mt-3">
        <h3 className="font-semibold leading-5 transition hover:text-primary-700">
          <Link href={''}> Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</Link>
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

          <Stars value={3.5} className='text-sm' />
        </div>
      </div>
    </div>
  );
}
