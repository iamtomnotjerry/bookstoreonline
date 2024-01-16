import Order from '@/app/models/order';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    const { user, items, totalPrice, status } = await req.json();
    const newOrder = {
        user,
        items,
        totalPrice,
        status,
    };
    const order = await Order.create(newOrder);
    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
