import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from './ui/Button';

export default function SearchBar() {
  return (
    <div className="flex items-center h-11 border-[1.5px] border-gray-400 p-1.5 rounded-xl w-full max-w-lg">
      <input
        placeholder="Tìm kiếm sách..."
        className="border-none bg-transparent outline-none flex-1 px-4"
      />
      <Button size="sm" className="px-5">
        <MagnifyingGlassIcon className="h-4" />
      </Button>
    </div>
  );
}
