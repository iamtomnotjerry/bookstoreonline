import Image from 'next/image';

export default function Banner() {
  return (
    <Image
      alt="banner"
      src="/banner.jpg"
      width={1920}
      height={505}
      className="max-w-full rounded-[0.625rem]"
    />
  );
}
