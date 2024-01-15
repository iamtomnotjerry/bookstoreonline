// // BookDetailPage.js
'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Changed from 'next/navigation' to 'next/router'
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Brief from '@/app/pages-sections/book-detail/Brief';
import Detail from '@/app/pages-sections/book-detail/Detail';
import RelatedBooks from '@/app/pages-sections/book-detail/RelatedBooks';
import ReviewsAndRates from '@/app/pages-sections/book-detail/ReviewsAndRates';

interface Book {
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
  coverImageUrl: string;
  genres: string[];

}
export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
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
  if (!book || !book._id || !book.title || !book.imageUrl || !book.author) {
    return null; // Or return a placeholder or loading state
  }
  return (
    
    <main>
      <Breadcrumb
        items={[
          {
            label: 'Trang chủ',
            href: '/',
          },
          {
            label: 'Truyện tranh',
            href: '/books',
          },
          {
            label: book.title,
            href: '/books/1',
          },
        ]}
      />

      <div className="mt-4 space-y-6">
        <Brief book={book} />
        <Detail book={book} />
        <RelatedBooks book={book} />
        <ReviewsAndRates book={book} />
      </div>
    </main>
  );
}
