import BookCard from '@/app/components/BookCard';
import BookCardsList from '@/app/components/BookCardsList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function RelatedBooks() {
  const { data } = useQuery({
    queryKey: ['books'],
    queryFn: () => axios.get(`/api/books`),
  });

  const books = data?.data?.books;

  return (
    <section className="bg-white rounded-[0.625rem] p-4 pb-6">
      <h3 className="font-semibold text-lg text-primary-700">Sách liên quan</h3>
      {books ? (
        <BookCardsList data={books.slice(0,5)} />
      ) : (
        <BookCardsList.Skeleton />
      )}
    </section>
  );
}
