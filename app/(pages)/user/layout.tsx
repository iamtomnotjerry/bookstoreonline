import ActiveLink from '@/app/components/ActiveLink';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/Avatar';
import { Separator } from '@/app/components/ui/Separator';
import routes from '@/app/configs/routes';
import {
  ArrowRightEndOnRectangleIcon,
  ClipboardDocumentListIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/solid';

export function Sidebar() {
  return (
    <aside className="bg-white rounded-[0.625rem] p-4 pb-6 sticky top-20">
      <div className="flex items-center">
        <Avatar className="w-11 h-11">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>

        <div className="ml-3">
          <h3 className="font-semibold text-primary-700">Nguyễn Văn A</h3>
          <ActiveLink
            href={routes.profile}
            className="flex items-center text-sm text-gray-500"
            activeClassName="text-primary-700 font-semibold"
          >
            <PencilIcon className="h-3.5 mr-1" />
            Chỉnh sửa
          </ActiveLink>
        </div>
      </div>

      <Separator />

      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center font-medium">
            <UserIcon className="h-6 mr-4 text-primary-700" />
            <span>Tài khoản</span>
          </div>

          <ul className="pl-10 space-y-2 mt-2">
            <li>
              <ActiveLink
                href={routes.profile}
                activeClassName="text-primary-700 font-semibold"
              >
                Hồ sơ
              </ActiveLink>
            </li>

            <li>
              <ActiveLink
                href={routes.changePassword}
                activeClassName="text-primary-700 font-semibold"
              >
                Đổi mật khẩu
              </ActiveLink>
            </li>
          </ul>
        </div>
        <ActiveLink
          href={routes.purchase}
          className="inline-flex items-center font-medium"
          activeClassName="text-primary-700 font-semibold"
        >
          <ClipboardDocumentListIcon className="h-6 mr-4 text-casal-700" />
          <span>Đơn mua</span>
        </ActiveLink>

        <button className="flex items-center font-medium">
          <ArrowRightEndOnRectangleIcon className="h-6 mr-4 text-donkey-brown-400" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
