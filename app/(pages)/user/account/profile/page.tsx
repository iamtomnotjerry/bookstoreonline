import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Label } from '@/app/components/ui/Label';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/Avatar';
import React from 'react';

export default function Profile() {
  return (
    <main className="bg-white rounded-[0.62rem] p-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-primary-700">Hồ sơ</h2>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-medium py-5 text-right pr-16 w-56">
                  Họ và tên:
                </td>
                <td>
                  <Input
                    className="w-full"
                    placeholder="Nhập tên của bạn"
                    defaultValue={'Nguyễn Văn A'}
                  />
                </td>
              </tr>
              <tr>
                <td className="font-medium py-5 text-right pr-16 w-56">
                  Số điện thoại:
                </td>
                <td>
                  <Input
                    className="w-full"
                    placeholder="Nhập số điện thoại của bạn"
                    defaultValue={'0382718306'}
                  />
                </td>
              </tr>
              <tr>
                <td className="font-medium py-5 text-right pr-16 w-56">
                  Email:
                </td>
                <td>
                  <Input
                    className="w-full"
                    placeholder="Nhập số điện thoại của bạn"
                    defaultValue={'example@gmail.com'}
                    disabled
                  />
                </td>
              </tr>
              <tr>
                <td className="font-medium py-5 text-right pr-16 w-56 align-top">
                  Địa chỉ:
                </td>
                <td className="align-top">
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

              <tr>
                <td></td>
                <td className='text-right pt-8'>
                  <Button>Lưu thay đổi</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-4 flex flex-col items-center">
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
