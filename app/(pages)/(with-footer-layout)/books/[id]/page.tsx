// // BookDetailPage.js
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation'; // Changed from 'next/navigation' to 'next/router'

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Brief from '@/app/pages-sections/book-detail/Brief';
import Detail from '@/app/pages-sections/book-detail/Detail';
import RelatedBooks from '@/app/pages-sections/book-detail/RelatedBooks';
import ReviewsAndRates from '@/app/pages-sections/book-detail/ReviewsAndRates';

// import BookDetail from '@/app/components/BookDetail';

// const BookDetailPage = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const bookResponse = await fetch(`/api/books/${id}`);
//         if (!bookResponse.ok) {
//           throw new Error('Failed to fetch book data');
//         }
//         const { book } = await bookResponse.json();
//         setBook(book);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setBook(null);
//       }
//     };

//     if (id) {
//       fetchBook();
//     }
//   }, [id]);

//   return (
//     <div>
//       <BookDetail book={book} />
//     </div>
//   );
// };

// export default BookDetailPage;

export default function BookDetailPage() {
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
            label: 'One Piece 107',
            href: '/books/1',
          },
        ]}
      />

      <div className="mt-4 space-y-6">
        <Brief />
        <Detail />
        <RelatedBooks />
        <ReviewsAndRates />
      </div>
    </main>
  );
}
