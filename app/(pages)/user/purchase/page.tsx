import OrderedBook from '@/app/components/OrderedBook';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/Pagination';
import { Separator } from '@/app/components/ui/Separator';

export default function Page() {
  return (
    <main className="bg-white rounded-[0.625rem] p-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-primary-700">Đơn mua</h2>

      <div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Tìm kiếm..." variant="secondary" />
          <Button size="sm">Tìm</Button>
        </div>

        <div className="mt-8">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold uppercase">#89yg7f67g</h4>
              <span className="text-donkey-brown-500 font-medium">Pending</span>
            </div>

            <div className="space-y-4 mt-3">
              <OrderedBook />
              <OrderedBook />
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold uppercase">#89yg7f67g</h4>
              <span className="text-donkey-brown-500 font-medium">Pending</span>
            </div>

            <div className="space-y-4 mt-3">
              <OrderedBook />
              <OrderedBook />
            </div>
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
}
