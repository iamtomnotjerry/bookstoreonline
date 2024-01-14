import BookCard from '@/app/components/BookCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/Pagination';
import Sidebar from '@/app/pages-sections/search/Sidebar';

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Sidebar />
      </div>

      <div className="col-span-9 bg-white rounded-[0.625rem] p-4 pb-6">
        <h4 className="font-semibold">
          Tìm được <span className="text-primary-700">3</span> kết quả dựa vào
          từ khoá: <span className="text-primary-700">Hai số phận</span>
        </h4>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <BookCard key={index} />
          ))}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
