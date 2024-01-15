import BookCard from '@/app/components/BookCard';
import BookCardsList from '@/app/components/BookCardsList';

export default function RelatedBooks({book}) {
  return (
    <section className="bg-white rounded-[0.625rem] p-4 pb-6">
      <h3 className="font-semibold text-lg text-primary-700">Sách liên quan</h3>
      <BookCardsList />
    </section>
  );
}
