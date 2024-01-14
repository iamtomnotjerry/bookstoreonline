import BookCard from './BookCard';

export default function BookCardsList() {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
      {Array.from(Array(10)).map((_, index) => (
        <BookCard key={index} />
      ))}
    </div>
  );
}
