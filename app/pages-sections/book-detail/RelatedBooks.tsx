import BookCard from '@/app/components/BookCard';

export default function RelatedBooks() {
  return (
    <section className="bg-white rounded-[0.625rem] p-4 pb-6">
      <h3 className="font-semibold text-lg text-primary-700">Sách liên quan</h3>
      <div className="grid gap-4 grid-cols-5">
        {Array.from(Array(5)).map((_, index) => (
          <BookCard key={index} />
        ))}
      </div>
    </section>
  );
}
