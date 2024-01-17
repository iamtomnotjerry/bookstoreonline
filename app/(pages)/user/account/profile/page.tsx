'use client'
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Label } from '@/app/components/ui/Label';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/Avatar';
import React from 'react';
import { Separator } from '@/app/components/ui/Separator';
import ImageModal from '@/app/components/ImageModel';

interface IUser {
  name: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  imageUrl:string;
  country:string;
  city:string;
  specificLocal:string;
}

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [formData, setFormData] = useState<IUser>({
    name: '',
    fullname: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
    country: '',
    city: '',
    specificLocal: '',
  });
  const { data } = useSession();
  const email = data?.user?.email;
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`/api/profile/${email}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data.user);
          setFormData(data.user); // Populate formData with user data
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [email]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleImageSelect = (imageUrl: string) => setSelectedImageUrl(imageUrl);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`/api/profile/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
    } catch (error) {
      console.log(error)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }
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
                    defaultValue={user.name}
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
                    defaultValue={user.phoneNumber}
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
                    defaultValue={user.email}
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
                      <Input placeholder="Quốc gia" defaultValue={'Việt Nam'} />
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                      <Label>Tỉnh/Thành phố:</Label>
                      <Input placeholder="Tỉnh/Thành phố" defaultValue={'Thành Phố Hồ Chí Minh'} />
                    </div>
                  </div>

                  <div className="grid mt-3 w-full items-center gap-1.5">
                    <Label>Địa chỉ cụ thể:</Label>
                    <Input className="w-full" placeholder="Địa chỉ cụ thể" defaultValue={'Đại Học Công Nghệ Thông Tin UIT'} />
                  </div>
                </td>
              </tr>

              <tr className="md:table-row flex flex-col items-start">
                <td></td>
                <td className="text-right w-full pt-8">
                  <Button onClick={handleSaveChanges}>Lưu thay đổi</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Separator className="xl:hidden order-2" />

        <div className="xl:col-span-4 xl:order-2 order-1 flex flex-col items-center">
          <Avatar className="w-36 h-36">
            <AvatarImage src={selectedImageUrl || 'https://github.com/shadcn.png'} />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="mt-8" onClick={handleOpenModal}>
            Chọn hình ảnh
          </Button>
        </div>

        {showModal && (
          <ImageModal onClose={handleCloseModal} onSubmit={handleImageSelect} />
        )}
      </div>
    </main>
  );
}
