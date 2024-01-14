import { Input } from '@/app/components/ui/Input';
import { Label } from '@/app/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/Select';
import { MinusIcon } from '@heroicons/react/24/outline';

const categoriesList = [
  {
    name: 'Tiểu thuyết',
  },
  {
    name: 'Truyện tranh',
  },
  {
    name: 'Kinh tế',
  },
  {
    name: 'Khoa học',
  },
  {
    name: 'Văn học',
  },
  {
    name: 'Lịch sử',
  },
  {
    name: 'Thiếu nhi',
  },
  {
    name: 'Sách giáo khoa',
  },
  {
    name: 'Sách tham khảo',
  },
  {
    name: 'Sách ngoại ngữ',
  },
  {
    name: 'Sách chuyên ngành',
  },
  {
    name: 'Sách kỹ năng sống',
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-white rounded-[0.625rem] p-4 pb-6 sticky top-20">
      <h2 className="text-lg font-semibold text-primary-700">
        Bộ lọc tìm kiếm
      </h2>

      <div className="space-y-4 mt-4">
        <div className="grid gap-1.5">
          <Label>Danh mục</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              {categoriesList.map(({ name }, index) => (
                <SelectItem key={index} value={`${index}`}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-1.5">
          <Label>Ngôn ngữ</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Chọn ngôn ngữ" />
            </SelectTrigger>
            <SelectContent>
              {['Tất cả', 'Tiếng Việt', 'Tiếng Anh', 'Tiếng Trung'].map(
                (name, index) => (
                  <SelectItem key={index} value={`${index}`}>
                    {name}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-1.5">
          <Label>Mức giá</Label>
          <div className="flex space-x-2">
            <Input placeholder="Từ" variant="secondary" />
            <MinusIcon className="w-8" />
            <Input placeholder="Đến" variant="secondary" />
          </div>
        </div>

        <div className="grid gap-1.5">
          <Label>Hình thức bìa</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Chọn hình thức bìa" />
            </SelectTrigger>
            <SelectContent>
              {['Tất cả', 'Bìa cứng', 'Bìa mềm'].map((name, index) => (
                <SelectItem key={index} value={`${index}`}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </aside>
  );
}
