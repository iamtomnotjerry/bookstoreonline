import Image from 'next/image';
import { Badge } from './ui/Badge';

export default function OrderedBook() {
  return (
    <div className="flex space-x-1 items-center">
      <div className="flex items-start flex-1">
        <div className="w-28">
          <div className="w-full aspect-w-3 aspect-h-3">
            <Image
              alt=""
              src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_183396.jpg"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold line-clamp-2">
            Vạn Dặm Đường Từ Một Bước Chân - Tặng Kèm Bookmark
          </h4>

          <div className="text-gray-500 text-sm mt-1">12/1/2024</div>

          <Badge variant="outline" className="mt-4">
            x2
          </Badge>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <span className="text-gray-300 line-through font-medium">525.500đ</span>
        <span className="text-primary-700 text-lg font-bold">550.000đ</span>
      </div>
    </div>
  );
}
