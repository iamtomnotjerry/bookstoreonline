import Stars from '@/app/components/Stars';
import { Badge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/Tabs';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Brief() {
  const images = [
    'https://cdn0.fahasa.com/media/catalog/product/9/7/9784088837857.jpg',
    'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_107/2023_12_25_16_54_05_3-390x510.jpg',
    'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/one_piece_107/2023_12_25_16_54_05_7-390x510.jpg',
  ];

  return (
    <section className="bg-white px-4 py-6 rounded-[0.625rem]">
      <div className="flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-6">
        <Tabs
          defaultValue="0"
          className="flex xl:flex-row flex-col-reverse items-start lg:w-5/12"
        >
          <TabsList className="xl:block flex xl:justify-start justify-center w-full h-auto xl:w-[20%] bg-transparent xl:space-y-2 xl:space-x-0 space-x-2 xl:px-3 xl:py-0 py-6">
            {images.map((url, index) => (
              <TabsTrigger
                key={index}
                value={`${index}`}
                className="block xl:w-full w-20 p-2 data-[state=active]:shadow-none border rounded-[0.625rem] data-[state=active]:border-primary-500 transition hover:border-gray-100 border-transparent"
              >
                <div className="aspect-w-5 aspect-h-6">
                  <Image
                    alt=""
                    src={url}
                    width={100}
                    height={100}
                    className="w-full object-cover"
                  />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {images.map((url, index) => (
            <TabsContent key={index} value={`${index}`} className="xl:flex-1 w-full">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  alt=""
                  src={url}
                  width={100}
                  height={100}
                  className="w-full object-contain"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex-1">
          <h2 className="text-[1.375rem] font-semibold">
            Dragon Ball Z (Vizbig Edition) Vol. 7 (English Edition)
          </h2>

          <div className="hidden grid-cols-3 mt-6 gap-3 lg:grid">
            <div className="even:col-span-2">
              <span>Tác giả: </span>
              <span className="font-medium">Akira Toriyama</span>
            </div>
            <div className="even:col-span-2">
              <span>Nhà xuất bản: </span>
              <span className="font-medium">NXB Kim Đồng</span>
            </div>
            <div className="even:col-span-2">
              <span>Năm xuất bản: </span>
              <span className="font-medium">2024</span>
            </div>
            <div className="even:col-span-2">
              <span>Hình thức bìa: </span>
              <span className="font-medium">Mềm</span>
            </div>
          </div>

          <div className="items-center mt-3 lg:flex hidden">
            <span>Danh mục: </span>
            <div className="flex items-center space-x-2 ml-3">
              <Badge variant="secondary">Truyện tranh</Badge>
              <Badge variant="secondary">Trẻ em</Badge>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <Stars value={4.5} className="text-lg" />{' '}
            <span className="text-sm text-gray-500 ml-2">(27 đánh giá)</span>
          </div>

          <div className="flex items-center space-x-4 mt-7">
            <span className="text-3xl font-bold text-primary-700">
              405.000đ
            </span>
            <span className="line-through text-lg font-semibold text-gray-400">
              450.000đ
            </span>
            <Badge size="lg">-10%</Badge>
          </div>

          <div className="flex items-center mt-6">
            <span className="font-semibold">Số lượng:</span>
            <div className="flex items-center space-x-6 ml-8">
              <button>
                <PlusCircleIcon className="h-8 text-primary-700" />
              </button>
              <span className="text-xl font-semibold">1</span>
              <button>
                <MinusCircleIcon className="h-8 text-primary-700" />
              </button>
            </div>
            <span className="ml-4 text-gray-600 text-sm">
              (120 sản phẩm có sẵn)
            </span>
          </div>

          <div className="flex items-center space-x-4 mt-12">
            <Button size="lg" variant="outline">
              <ShoppingCartIcon className="h-6 mr-3" />
              <span>Thêm vào giỏ hàng</span>
            </Button>
            <Button size="lg">Mua ngay</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
