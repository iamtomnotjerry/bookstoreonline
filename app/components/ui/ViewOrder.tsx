import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/Dialog';
import Link from 'next/link';
import { IOrder } from '@/app/models/order';
import { IBook } from '@/app/models/book';
export function ViewOrder({ children, product }: { children: React.ReactNode, product: IOrder<IBook> }) {
    return (
      <Dialog>
        <DialogTrigger>{ children }</DialogTrigger>
        <DialogContent className="lg:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Xem đơn mua</DialogTitle>
            <DialogDescription>
              ID: {product._id}
            </DialogDescription>
          </DialogHeader>
          <div>
            <p className="text-sm text-ferra-700 underline mb-2">Thông tin đơn mua</p>
            <div className="grid grid-cols-5 gap-x-4 gap-y-2">
              <div className="col-span-1 flex items-center justify-end font-semibold text-sm text-gray-500">
                Khách hàng
              </div>
              <div className="col-span-4 flex items-center">
                {product.user}
              </div>
              <div className="col-span-1 flex items-center justify-end font-semibold text-sm text-gray-500">
              Ngày mua
              </div>
              <div className="col-span-4 flex items-center">
                {(new Date(product.createdAt)).toLocaleString("vi-VN")}
              </div>
              <div className="col-span-1 flex items-center justify-end font-semibold text-sm text-gray-500">
                Trạng thái
              </div>
              <div className="col-span-4 flex items-center">
                {product.status}
              </div>
              <div className="col-span-1 flex items-center justify-end font-semibold text-sm text-gray-500">
                Thành tiền
              </div>
              <div className="col-span-4 flex items-center">
                {product.totalPrice.toLocaleString("vi-VN")} đ
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-ferra-700 underline mb-2">Sản phẩm đã mua</p>
            <table className="table-auto w-full border-[1px] border-gray-400 border-spacing-y-2 rounded-lg">
              <thead>
                <tr className="text-sm text-gray-400 border-b-[1px]">
                  <th>Tên</th>
                  <th className="w-16">Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
              {
                product.items.map((data, i) => {
                  return (
                    <tr 
                      className="text-sm [&:not(:last-child)]:border-b-[1px] hover:bg-ferra-100 cursor-pointer"
                      onClick={() => data.book != null ? window.open(`/books/${data.book._id}`) : undefined}
                      key={i}
                    >
                      <td className="px-2 py-1">{data.book != null ? data.book.title : "N/A"}</td>
                      <td className="text-center">{data.quantity}</td>
                      {
                        data.book != null && data.book.discount ? (
                          <td className="text-center">{data.book != null ? (data.book.price - data.book.discount).toLocaleString("vi-VN") : "N/A"} đ <span className="text-xs line-through text-gray-500">{data.book != null ? data.book.price.toLocaleString("vi-VN") : "N/A"} đ</span></td>
                        ) : (
                          <td className="text-center">{data.book != null ? data.book.price : "N/A"}</td>
                        )
                      }
                      <td className="text-center">{data.book ? ((data.book.price - data.book.discount) * data.quantity).toLocaleString("vi-VN") + " đ" : "N/A"}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    )
  }