// BookDetailPage.js
'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Changed from 'next/navigation' to 'next/router'

import BookDetail from '@/app/components/BookDetail';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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

  return (
    <div>
      <BookDetail book={book} />
    </div>
  );
};

export default BookDetailPage;
