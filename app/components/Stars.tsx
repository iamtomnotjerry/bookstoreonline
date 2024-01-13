import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/solid';

interface StartsProps {
  value: number;
  className?: string;
}

export default function Stars({ value, className }: StartsProps) {
  return (
    <div className={cn('relative flex items-center', className)}>
      <div className="flex items-center text-gray-200 -space-x-[0.125em]">
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
      </div>
      <div
        className="flex items-center -space-x-[0.125em] text-banana-mania-400 absolute"
        style={{
          clipPath: `polygon(0 0, ${(value / 5) * 100}% 0%, ${
            (value / 5) * 100
          }% 100%, 0% 100%)`,
        }}
      >
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
        <StarIcon className="h-[1em]" />
      </div>
    </div>
  );
}
