'use client';

import { Button } from '@/app/components/ui/Button';
import { Separator } from '@/app/components/ui/Separator';
import { useState } from 'react';

export default function Detail() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white rounded-[0.625rem] p-4">
      <div>
        <h3 className="font-semibold text-lg text-primary-700">
          Chi tiết sản phẩm
        </h3>

        <div className="pl-10 mt-3">
          <table>
            <tbody>
              <tr>
                <td className="font-medium pr-28 py-1.5">Danh mục:</td>
                <td>Truyện tranh</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Tác giả:</td>
                <td>Nobi Nobita</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Nhà xuất bản:</td>
                <td>NXB Kim Đồng</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Năm xuất bản:</td>
                <td>2022</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Ngôn ngữ:</td>
                <td>Tiếng Việt</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Khối lượng:</td>
                <td>450g</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Kích thước:</td>
                <td>22 x 15 x 3.6 cm</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Số trang:</td>
                <td>120</td>
              </tr>

              <tr>
                <td className="font-medium pr-28 py-1.5">Hình thức bìa:</td>
                <td>Mềm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold text-lg text-primary-700">
          Mô tả sản phẩm
        </h3>

        <div
          className="prose prose-sm max-w-none px-4 mt-3"
          dangerouslySetInnerHTML={{
            __html: `         <p>Dragon Ball Z Vol. 7 (Vizbig Edition)</p>
          <p>
            After years of training and adventure, Goku has become Earth's
            ultimate warrior. And his son, Gohan, shows even greater promise.
            But the stakes are increasing as even deadlier enemies threaten the
            planet. DRAGON BALL Z is the ultimate science fiction/martial arts
            manga.
          </p>
          <p>A collection of volumes 19-21!</p>
          <p>
            In the midst of battle with the hideous bio-monster Cell, Son Gohan
            surpassed his father, Son Goku. Now he is the strongest warrior in
            the universe! With his newfound might, Gohan manages to beat Cell at
            his own twisted game. However, Cell does not like to lose. When he
            realizes he's licked, he decides to self-destruct with a horrible
            blast that's certain to reduce Earth to a speck of dust. Son Goku
            has one trick up his sleeve that will thwart Cell's desperate
            attempt at mass destruction. Sadly, in order to save Earth from
            incineration, Goku must make the ultimate sacrifice and leave the
            fate of the planet in the hands of Son Gohan.
          </p>
          <p>
            Several years go by, and Gohan has made good on his promise to
            protect Earth from evil. But his mother still insists that he get a
            good education! When Gohan starts a new high school, all he wants to
            do is fit in. But how can he keep his Super Saiyan powers under
            wraps? Just as his classmates become suspicious of Gohan, he comes
            up with a plan to be a hero and a normal kid at the same time--a
            superhero disguise! Citizens of Earth, meet The Great Saiyaman!
          </p>`.slice(0, showMore ? undefined : 500),
          }}
        ></div>

        <div className="flex justify-center mt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Ẩn bớt' : 'Xem thêm'}
          </Button>
        </div>
      </div>
    </section>
  );
}
