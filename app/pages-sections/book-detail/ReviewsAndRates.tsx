import Review from '@/app/components/Review';
import Stars from '@/app/components/Stars';
import { Button } from '@/app/components/ui/Button';
import { Separator } from '@/app/components/ui/Separator';
import { PencilIcon } from '@heroicons/react/24/outline';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/Pagination';

export default function ReviewsAndRates() {
  return (
    <section className="bg-white rounded-[0.625rem] p-4 pb-6">
      <h3 className="font-semibold text-lg text-primary-700">Đánh giá</h3>

      <div className="mt-6 flex items-center">
        <div className="flex flex-col items-center px-10">
          <div className="font-semibold">
            <span className="text-3xl">4.7</span>
            <span className="text-xl ml-1">/5</span>
          </div>

          <Stars value={4.7} className="mt-4" />

          <span className="text-sm text-gray-500 mt-2">(65 đánh giá)</span>
        </div>

        <div className="text-sm space-y-1">
          <div className="flex items-center space-x-2">
            <span>5 sao</span>
            <div className="bg-gray-300 h-1 w-64">
              <div className="h-full bg-banana-mania-300 w-1/2"></div>
            </div>
            <span>50%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>4 sao</span>
            <div className="bg-gray-300 h-1 w-64">
              <div className="h-full bg-banana-mania-300 w-1/2"></div>
            </div>
            <span>50%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>3 sao</span>
            <div className="bg-gray-300 h-1 w-64">
              <div className="h-full bg-banana-mania-300 w-1/2"></div>
            </div>
            <span>50%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>2 sao</span>
            <div className="bg-gray-300 h-1 w-64">
              <div className="h-full bg-banana-mania-300 w-1/2"></div>
            </div>
            <span>50%</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>1 sao</span>
            <div className="bg-gray-300 h-1 w-64">
              <div className="h-full bg-banana-mania-300 w-1/2"></div>
            </div>
            <span>50%</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Button variant="outline" size="lg">
            <PencilIcon className="h-5 mr-3" />
            <span>Đánh giá ngay</span>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
