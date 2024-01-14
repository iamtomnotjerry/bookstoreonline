import Image from 'next/image';
import { Badge } from './ui/Badge';
import Link from 'next/link';

export default function FlashSaleBookCard() {
  return (
    <div className="bg-white transition hover:shadow-lg rounded-[0.625rem] overflow-hidden p-4">
      <Link href={''} className="block aspect-w-1 aspect-h-1">
        <Image
          alt=""
          src="https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-1-tr_n-l_n-m_i-nh_-_-kh_c-2.jpg"
          width={200}
          height={200}
          className="w-full object-contain"
        />
      </Link>

      <div className="mt-3">
        <h3 className="font-semibold leading-5">
          <Link href={''}> Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark</Link>
        </h3>

        <div className="flex items-center mt-2">
          <span className="text-primary-700 font-bold text-lg">75.000đ</span>
          <Badge size="sm" className="ml-2">
            -10%
          </Badge>
        </div>

        <span className="text-tower-gray-300 line-through font-semibold">
          100.000đ
        </span>

        <div className="h-3 bg-tower-gray-300 mt-3 relative rounded-full">
          <div
            style={{
              width: '20%',
            }}
            className="h-3 rounded-full bg-casal-700"
          ></div>
          <span className="absolute text-[0.625rem] font-semibold text-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            10 đã bán
          </span>
        </div>
      </div>
    </div>
  );
}
