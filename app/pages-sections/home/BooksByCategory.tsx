import BookCard from '@/app/components/BookCard';
import { Button } from '@/app/components/ui/Button';
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BooksByCategory() {
  return (
    <section className="bg-white p-4 pb-6 rounded-[0.625rem]">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center text-primary-700 relative">
          <ChevronRightIcon className="h-6 mr-3" />
          <span className="text-lg font-semibold">Truyện tranh</span>
          <div className="absolute h-[1.5px] bg-primary-700 rounded-full w-[90%] -bottom-0.5 left-10"></div>
        </h2>

        <Link href={''} className="flex items-center text-sm font-medium transition hover:text-primary-700">
          <span>Xem tất cả</span>
          <ArrowRightIcon className="h-3 ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {Array.from(Array(5)).map((_, index) => (
          <BookCard key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Xem thêm</Button>
      </div>
    </section>
  );
}
