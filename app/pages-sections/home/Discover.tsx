'use client'
import { useState, useEffect } from 'react';
import BookCard from '@/app/components/BookCard';
import { Button } from '@/app/components/ui/Button';
import { FireIcon } from '@heroicons/react/24/outline';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre?: string;
  description?: string;
  price: number;
  stock?: number;
  imageUrl: string;
}

export default function Discover() {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [displayMore, setDisplayMore] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      const booksArray = Array.isArray(data.books) ? data.books : [];
      setBooks(booksArray);
      // Initially display the first 15 books
      setDisplayedBooks(booksArray.slice(0, 15));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    // Display all books when "Xem thêm" (See more) is clicked
    setDisplayMore(true);
    setDisplayedBooks(books || []);
  }

  if (books === null) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white p-4 pb-6 rounded-[0.625rem]">
      <h2 className="flex items-center text-primary-700">
        <FireIcon className="h-7 mr-3" />
        <span className="text-lg font-semibold">Khám phá</span>
      </h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {displayedBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      {!displayMore && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={handleLoadMore}>
            Xem thêm
          </Button>
        </div>
      )}
    </section>
  );
}
