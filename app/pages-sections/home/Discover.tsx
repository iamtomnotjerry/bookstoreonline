import BookCard from '@/app/components/BookCard';
import BookCardsList from '@/app/components/BookCardsList';
import { Button } from '@/app/components/ui/Button';
import { FireIcon } from '@heroicons/react/24/outline';

export default function Discover() {
  return (
    <section className="bg-white p-4 pb-6 rounded-[0.625rem]">
      <h2 className="flex items-center text-primary-700">
        <FireIcon className="h-7 mr-3" />
        <span className="text-lg font-semibold">Khám phá</span>
      </h2>

      <div className="mt-4">
        <BookCardsList />
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Xem thêm</Button>
      </div>
    </section>
  );
}
