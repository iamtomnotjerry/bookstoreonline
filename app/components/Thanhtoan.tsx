import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/ui/Button';
import { CartData } from '../provider/index';
import { StoreContext } from '@/app/context';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

export default function Thanhtoan({ selected }: { selected: CartData[] }) {
  const { cartData, setCartData } = useContext(StoreContext);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const router = useRouter();
  const { data } = useSession();
  const user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined = data?.user;
  const handlePayment = async () => {
    try {
      setPaymentProcessing(true);
      if (!user?.email) {
        toast.error('Please log in to proceed with the payment.');
        return; // Exit early if the user is not logged in
      }
      if (selected.length === 0) {
        toast.warn(
          'Please add items to your cart before proceeding with the payment.',
        );
        return; // Exit early if there are no items in the cart
      }
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.email,
          items: selected.map((item) => ({
            book: item.book._id,
            quantity: item.count,
          })),
          totalPrice: selected.reduce(
            (acc, cur) =>
              acc +
              (cur.book.price
                ? (cur.book.price - cur.book.discount) * cur.count
                : 100000 * cur.count),
            0,
          ),
          status: 'Pending',
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Order created:', data.order);

        // Clear the cart data after successful order creation
        setCartData(cartData.filter((item) => !selected.includes(item)));

        // Redirect to the /user/purchase route after successful order creation
        router.push('/user/purchase');
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle error, e.g., show an error message to the user
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <div className="sticky max-lg:left-0 max-lg:bottom-0 lg:top-20 max-lg:bg-donkey-brown-100 max-h-40 bg-white col-span-full lg:col-span-3 px-4 py-3 rounded-xl">
      <p className="font-semibold mb-2">
        Thanh toán ({selected.length} sản phẩm)
      </p>
      <hr className="mb-2" />
      <div className="relative">
        <span className="text-sm mt-2">Tổng số tiền</span>
        <p className="text-center text-lg text-ferra-700 font-bold float-right mb-4">
          {selected
            .reduce(
              (acc, cur) =>
                acc +
                (cur.book.price
                  ? (cur.book.price - cur.book.discount) * cur.count
                  : 100000 * cur.count),
              0,
            )
            .toLocaleString()}
        </p>
      </div>
      <Button
        className="w-full"
        onClick={handlePayment}
        disabled={paymentProcessing}
      >
        {paymentProcessing ? 'Processing...' : 'Thanh toán'}
      </Button>
    </div>
  );
}
