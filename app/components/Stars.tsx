import { StarIcon } from '@heroicons/react/24/solid';

interface StartsProps {
  value: number;
}

export default function Stars({ value }: StartsProps) {
  return (
    <div className="relative flex items-center">
      <div className="flex items-center text-gray-200 -space-x-[1px]">
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
      </div>
      <div
        className="flex items-center -space-x-[1px] text-banana-mania-400 absolute"
        style={{
          clipPath: `polygon(0 0, ${(value / 5) * 100}% 0%, ${
            (value / 5) * 100
          }% 100%, 0% 100%)`,
        }}
      >
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
        <StarIcon className="h-3.5" />
      </div>
    </div>
  );
}
