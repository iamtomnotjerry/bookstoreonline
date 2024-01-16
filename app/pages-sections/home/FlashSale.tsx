'use client';

import BookCardsList from '@/app/components/BookCardsList';
import FlashSaleBookCard from '@/app/components/FlashSaleBookCard';
import { IBook } from '@/app/models/book';
import { BoltIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FlashSale() {
  const { data } = useQuery({
    queryKey: ['books'],
    queryFn: () => axios.get<{ books: IBook[] }>('/api/books'),
  });

  const books = data?.data.books;

  return (
    <section className="bg-donkey-brown-400 w-full relative">
      <div className="container pt-6 pb-10 mx-auto">
        <div className="bg-white h-12 rounded-[0.625rem] overflow-hidden flex items-center">
          <div className="h-full bg-primary-700 pl-8 pr-28 inline-flex items-center font-extrabold italic text-white [clip-path:polygon(0_0,80%_0,100%_100%,0%_100%)] text-lg">
            <span>FLASH</span>
            <BoltIcon className="h-7 text-banana-mania-200 -mr-1" />
            <span>ALE</span>
          </div>

          <div className="ml-10 font-bold text-lg tracking-widest">
            23:01:59
          </div>
        </div>

        {books ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
            {books.slice(0, 5).map((book, index) => (
              <FlashSaleBookCard key={index} book={book} />
            ))}
          </div>
        ) : (
          <BookCardsList.Skeleton length={5} />
        )}
      </div>
    </section>
  );
}
