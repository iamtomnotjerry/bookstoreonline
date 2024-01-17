import { cn } from '@/app/lib/utils';
import Image from 'next/image';
import fonts from '../configs/fonts';
import Link from 'next/link';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import mask from "@/public/footer-mask.png";

export default function Footer() {
  return (
    <footer className="w-screen relative left-[calc(-50vw+50%)] -mb-16 mt-32">
      <div className="relative min-w-[700px] -z-10 -mb-1 min-h-[177px] max-h-[400px]">
        {/* <div className="bg-banana-mania-100 w-full h-[12.29166666667vw] [mask:url(/footer-mask.svg)] [mask-size:cover] absolute bottom-6"></div>
        <div className="bg-donkey-brown-400 w-full h-[12.29166666667vw] [mask:url(/footer-mask.svg)] [mask-size:cover] absolute bottom-4"></div>
        <div className="bg-eunry-400 w-full h-[12.29166666667vw] [mask:url(/footer-mask.svg)] [mask-size:cover] absolute bottom-2"></div>
        <div className="bg-primary-700 w-full h-[12.29166666667vw] [mask:url(/footer-mask.svg)]"></div> */}
        <FooterWave colour="#f7e4b2" className="absolute bottom-6" />
        <FooterWave colour="#b09c85" className="absolute bottom-4" />
        <FooterWave colour="#d4a5a5" className="absolute bottom-2" />
        <FooterWave colour="#774c50" className="absolute" />
        <FooterWave colour="#fff" className="opacity-0" />
      </div>

      <div className="bg-primary-700">
        <div className="container pb-16 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:-mt-6 mt-6 flex flex-col items-center">
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

            <div className="lg:col-span-7 lg:mt-0 mt-8">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 gap-6 lg:justify-items-start justify-items-center">
                <div className="grid lg:justify-items-start justify-items-center">
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Mua sách
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2 grid lg:justify-items-start justify-items-center">
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

                <div className="grid lg:justify-items-start justify-items-center">
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Tài khoản
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2 grid lg:justify-items-start justify-items-center">
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

                <div className="grid lg:justify-items-start justify-items-center">
                  <h3 className="font-semibold text-banana-mania-100 text-lg">
                    Liên hệ
                  </h3>
                  <ul className="text-white mt-3 text-sm space-y-2 grid lg:justify-items-start justify-items-center">
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
                      <MapPinIcon className="h-5" />
                      <Link
                        href={''}
                        className="transition hover:text-banana-mania-100"
                      >
                        Webdev Studios - UIT
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

interface HexColour {
  colour: `#${string}`,
  className: string
}

function FooterWave({ colour, ...props }: HexColour) {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 177" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMax meet"
      {...props}
    >
      <g transform="translate(0,177) scale(0.1,-0.1)" fill={colour} stroke="none">
        <path d="M2510 1760 c-400 -17 -768 -72 -1202 -181 -198 -50 -271 -73 -940 -305 l-368 -127 0 -573 0 -574 7200 0 7200 0 0 215 c0 118 -4 215 -8 215 -5 0 -231 45 -503 100 -1286 259 -2125 349 -2964 320 -414 -15 -624 -36 -1485 -150 -625 -82 -968 -110 -1360 -110 -447 0 -707 32 -1158 140 -300 73 -582 159 -1318 405 -826 276 -1162 380 -1485 459 -559 138 -1054 189 -1609 166z"/>
      </g>
    </svg>
  )
}