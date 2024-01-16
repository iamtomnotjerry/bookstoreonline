
'use client'
import Image from 'next/image';
import { Badge } from './ui/Badge';
import React, { useState, useEffect } from 'react';
interface Bookk {
  _id: string;
  title: string;
  imageUrl: string;
  author: string;
  price: number;
  discountPrice?: number;
  description: string;
  provider: string;
  publisher: string;
  publishYear: number;
  language: string;
  weight: number;
  dimensionsInCm: { x: number; y: number; z: number };
  pageCount: number;
  coverType: string;
  coverImage: string;
  genres: string[];

}
export default function OrderedBook({ book, count }) {
  const id = book;
  const [bookk, setBook] = useState<Bookk | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookResponse = await fetch(`/api/books/${id}`);
        if (!bookResponse.ok) {
          throw new Error('Failed to fetch book data');
        }
        const { book } = await bookResponse.json();
        setBook(book);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBook(null);
      }
    };
    if (id) {
      fetchBook();
    }
  }, [id]);

  if (!bookk) {
    return null; // Or return a placeholder or loading state
  }

  return (
    <div className="flex space-x-1 items-center">
      <div className="flex items-start flex-1">
        <div className="w-28">
          <div className="w-full aspect-w-3 aspect-h-3">
            <Image
              alt={bookk.title}
              src={bookk.coverImage}
              width={100}
              height={100}
              className="object-contain"
              objectFit="contain" 

            />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold line-clamp-2">{bookk.title}</h4>
          <div className="text-gray-500 text-sm mt-1">{bookk.publishDate}</div>
          <Badge variant="outline" className="mt-4">
            x{count}
          </Badge>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {bookk.price && (
          <span className="text-gray-300 line-through font-medium">
            {bookk.price.toLocaleString()}đ
          </span>
        )}
        <span className="text-primary-700 text-lg font-bold">
          {bookk.discountedPrice
            ? bookk.discountedPrice.toLocaleString()
            : (bookk.price || 0).toLocaleString()}đ
        </span>
      </div>
    </div>
  );
}
