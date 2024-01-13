// // pages/store/index.js
// 'use client';
// // pages/store/index.js
// import React, { useEffect, useState } from 'react';
// import BookList from '@/app/components/BookList';
// import SearchBar from '@/app/components/SearchBar';
// import { useSession } from 'next-auth/react';

// interface Book {
//   _id: string; // assuming id is a string based on mongoose ObjectId
//   title: string;
//   author: string;
//   genre?: string;
//   description?: string;
//   price: number;
//   stock?: number;
//   imageUrl: string;

// }

// export default function StorePage() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>('');

//   useEffect(() => {
//     // Fetch books and set them to both books and filteredBooks initially
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/books');
//         const { books } = await response.json();
//         setBooks(books);
//         setFilteredBooks(books);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (searchTerm: string) => {
//     // Update the searchTerm state and filter books based on it
//     setSearchTerm(searchTerm);

//     const filtered = books.filter((book) =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredBooks(filtered);
//   };
//   const { data: session } = useSession();
//   const userEmail = session?.user?.email;
//   return (
//     <div className="flex flex-col items-center p-2">
//       <SearchBar onSearch={handleSearch} />
//       <BookList books={filteredBooks}/>
//     </div>
//   );
// }

export default function HomePage() {
  return <main>
    abc
  </main>;
}
