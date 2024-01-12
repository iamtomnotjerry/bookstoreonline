// BookDetail.tsx

import React from 'react';

interface Book {
  imageUrl: string;
  title: string;
  author: string;
}

interface BookDetailProps {
  book: Book | null;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>;
  }

  const { imageUrl, title, author } = book;

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="mb-2">
        <img
          className="mr-2 rounded-md"
          src={imageUrl} 
          alt={title} 
          width={300} 
          height={300}
          priority={true} />
      </div>
      <div className="p-2 flex flex-col items-center">
        <p className="text-3xl">{title} by {author}</p>
        
      </div>
    </div>
  );
};

export default BookDetail;
