import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';

export default function ChangePassword() {
  return (
    <main className="bg-white rounded-[0.625rem] p-4 pb-8">
      <h2 className="mb-4 text-lg font-semibold text-primary-700">
        Đổi mật khẩu
      </h2>

      <div className="flex justify-center">
        <table>
          <tbody>
            <tr>
              <td className="pr-16 text-right py-6 font-semibold">
                Mật khẩu cũ:
              </td>
              <td>
                <Input placeholder="Nhập mật khẩu cũ" className="w-96" />
              </td>
            </tr>
            <tr>
              <td className="pr-16 text-right py-6 font-semibold">
                Mật khẩu mới:
              </td>
              <td>
                <Input placeholder="Nhập mật khẩu mới" className="w-96" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="text-right pt-6">
                <Button>Lưu thay đổi</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
