'use client';
import OrderedBook from '@/app/components/OrderedBook';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/Pagination';
import { Separator } from '@/app/components/ui/Separator';
import { IBook } from '@/app/models/book';
import { IOrder } from '@/app/models/order';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function OrderPage() {
  const { data } = useSession();
  const user = data?.user;

  const { data: ordersData, isLoading } = useQuery({
    queryKey: ['orders/' + user?.email],
    queryFn: () =>
      axios.get<{ orders: IOrder<IBook>[] }>('/api/orders/' + user?.email),
    enabled: !!user?.email,
  });

  const orders = ordersData?.data.orders;

  useEffect(() => {
    document.title = "Đơn mua";
  }, [])

  return (
    <main className="bg-white rounded-[0.625rem] p-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-primary-700">Đơn mua</h2>

      <div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Tìm kiếm..." variant="secondary" />
          <Button size="sm">Tìm</Button>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : orders?.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="mt-6">
            {orders?.map((order) => (
              <div key={order._id}>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium uppercase">#{order._id}</h4>
                  <span className="text-donkey-brown-500 font-medium">
                    {order.status}
                  </span>
                </div>

                <div className="space-y-4 mt-3">
                  {order.items.map((item, index) => (
                    <OrderedBook
                      key={index}
                      book={item.book}
                      count={item.quantity}
                    />
                  ))}
                </div>

                <Separator className="my-8" />
              </div>
            ))}
          </div>
        )}

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
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
