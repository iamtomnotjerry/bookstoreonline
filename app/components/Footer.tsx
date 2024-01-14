import { cn } from '@/lib/utils';
import Image from 'next/image';
import fonts from '../configs/fonts';
import Link from 'next/link';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="w-screen relative left-[calc(-50vw+50%)] -mb-16 mt-32">
      <div className="bg-banana-mania-100 h-[18vw] [mask:url(/footer-mask.svg)_no-repeat] relative -z-10 -mb-8">
        <div className="bg-donkey-brown-400 h-[18vw] [mask:url(/footer-mask.svg)_no-repeat] absolute w-full -z-[-1] -bottom-2">
          <div className="bg-eunry-400 h-[18vw] [mask:url(/footer-mask.svg)_no-repeat] absolute w-full -z-[-1] -bottom-2">
            <div className="bg-primary-700 h-[18vw] [mask:url(/footer-mask.svg)_no-repeat] absolute w-full -z-[-1] -bottom-2"></div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700">
        <div className="container pb-16 -mt-16 gap-4">
          <div className="grid grid-cols-12">
            <div className="col-span-5 -mt-6 flex flex-col items-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
                <Image
                  alt="logo"
                  src="/logo.svg"
                  width={100}
                  height={100}
                  className="w-16 h-auto"
                />
              </div>
              <h3
                className={cn(
                  fonts.logoFont.className,
                  'text-3xl text-white mt-4',
                )}
              >
                BookStore
              </h3>
              <h4 className="text-white font-medium mt-1">
                Sản phẩm của nhóm #1
              </h4>
            </div>

            <div className="col-span-7">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Mua sách
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2">
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Tiểu thuyết
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Kinh tế
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Chính trị
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Tài khoản
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2">
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Đăng kí
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Đăng nhập
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Hồ sơ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Lịch sử mua hàng
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Liên hệ
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2">
                    <li className="flex items-center space-x-3">
                      <PhoneIcon className="h-5" />
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        +84 034545344545
                      </Link>
                    </li>
                    <li className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-5" />
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        support@example.com
                      </Link>
                    </li>
                    <li className="flex items-start space-x-3">
                      <MapPinIcon className="h-9" />
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Webdev Studios - University of Information and
                        Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}