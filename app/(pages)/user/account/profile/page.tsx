import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Label } from '@/app/components/ui/Label';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/Avatar';
import React from 'react';
import { Separator } from '@/app/components/ui/Separator';

export default function Profile() {
  return (
    <main className="bg-white rounded-[0.62rem] p-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-primary-700">Hồ sơ</h2>

      <div className="grid xl:grid-cols-12 grid-cols-1 gap-4">
        <div className="xl:col-span-8 xl:order-1 order-3 ">
          <table className="w-full">
            <tbody>
              <tr className="md:table-row flex flex-col items-start">
                <td className="font-medium md:py-5 md:my-0 mb-1 mt-4 text-right whitespace-nowrap lg:pr-12 md:pr-8 pr-3 lg:w-48">
                  Họ và tên:
                </td>
                <td className="w-full">
                  <Input
                    className="w-full"
                    placeholder="Nhập tên của bạn"
                    defaultValue={'Nguyễn Văn A'}
                  />
                </td>
              </tr>
              <tr className="md:table-row flex flex-col items-start">
                <td className="font-medium md:py-5 md:my-0 mb-1 mt-4 text-right whitespace-nowrap lg:pr-12 md:pr-8 pr-3 lg:w-48">
                  Số điện thoại:
                </td>
                <td className="w-full">
                  <Input
                    className="w-full"
                    placeholder="Nhập số điện thoại của bạn"
                    defaultValue={'0382718306'}
                  />
                </td>
              </tr>
              <tr className="md:table-row flex flex-col items-start">
                <td className="font-medium md:py-5 md:my-0 mb-1 mt-4 text-right whitespace-nowrap lg:pr-12 md:pr-8 pr-3 lg:w-48">
                  Email:
                </td>
                <td className="w-full">
                  <Input
                    className="w-full"
                    placeholder="Nhập số điện thoại của bạn"
                    defaultValue={'example@gmail.com'}
                    disabled
                  />
                </td>
              </tr>
              <tr className="md:table-row flex flex-col items-start">
                <td className="font-medium md:py-5 md:my-0 mb-1 mt-4 text-right whitespace-nowrap lg:pr-12 md:pr-8 pr-3 lg:w-48 align-top">
                  Địa chỉ:
                </td>
                <td className="align-top w-full lg:mt-0 mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="grid w-full items-center gap-1.5">
                      <Label>Quốc gia:</Label>
                      <Input placeholder="Quốc gia" />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <Label>Tỉnh/Thành phố:</Label>
                      <Input placeholder="Tỉnh/Thành phố" />
                    </div>
                  </div>

                  <div className="grid mt-3 w-full items-center gap-1.5">
                    <Label>Địa chỉ cụ thể:</Label>
                    <Input className="w-full" placeholder="Địa chỉ cụ thể" />
                  </div>
                </td>
              </tr>

              <tr className="md:table-row flex flex-col items-start">
                <td></td>
                <td className="text-right w-full pt-8">
                  <Button>Lưu thay đổi</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator className="xl:hidden order-2" />

        <div className="xl:col-span-4 xl:order-2 order-1 flex flex-col items-center">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="mt-8">
            Chọn hình ảnh
          </Button>
        </div>
      </div>
    </main>
  );
}
