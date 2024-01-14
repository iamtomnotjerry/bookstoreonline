import FlashSaleBookCard from '@/app/components/FlashSaleBookCard';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function FlashSale() {
  return (
    <section className="bg-donkey-brown-400 w-screen relative left-[calc(-50vw+50%)]">
      <div className="container pt-6 pb-10">
        <div className="bg-white h-12 rounded-[0.625rem] overflow-hidden flex items-center">
          <div className="h-full bg-primary-700 pl-8 pr-28 inline-flex items-center font-extrabold italic text-white [clip-path:polygon(0_0,80%_0,100%_100%,0%_100%)] text-lg">
            <span>FLASH</span>
            <BoltIcon className="h-7 text-banana-mania-200 -mr-1" />
            <span>ALE</span>
          </div>

          <div className="ml-10 font-bold text-lg tracking-widest">
            23:01:59
          </div>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-10 gap-4 lg:gap-5">
          <FlashSaleBookCard />
          <FlashSaleBookCard />
          <FlashSaleBookCard />
          <FlashSaleBookCard />
          <FlashSaleBookCard />
        </div>
      </div>
    </section>
  );
}
