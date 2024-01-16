// // BookDetailPage.js
'use client';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Brief from '@/app/pages-sections/book-detail/Brief';
import Detail from '@/app/pages-sections/book-detail/Detail';
import RelatedBooks from '@/app/pages-sections/book-detail/RelatedBooks';
import ReviewsAndRates from '@/app/pages-sections/book-detail/ReviewsAndRates';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation'; // Changed from 'next/navigation' to 'next/router'

export default function BookDetailPage() {
  const { id } = useParams();

  const { data, error } = useQuery({
    queryKey: ['books/' + id],
    queryFn: () => axios.get(`/api/books/${id}`),
    enabled: !!id,
  });

  const book = data?.data?.book;

  return (
    book && (
      <main>
        <Breadcrumb
          items={[
            {
              label: 'Trang chủ',
              href: '/',
            },
            {
              label: book.category || 'Truyện tranh',
              href: '',
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
          <RelatedBooks />
          <ReviewsAndRates book={book} />
        </div>
      </main>
    )
  );
}
