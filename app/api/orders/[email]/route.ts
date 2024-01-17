import Order from '@/app/models/order';

import { NextRequest, NextResponse } from "next/server";
export async function GET(
    
    req: NextRequest,
    { params }: { params: { email: string }})
  {
    const email = params.email;
    
    try {
        const orders = await Order.find({ user: email }).populate('items.book').sort('-createdAt');
      
      if (!orders) {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 });
      }
      return NextResponse.json({ orders }, { status: 200 });
    } catch (error) {
      console.error('Error fetching book:', error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  }