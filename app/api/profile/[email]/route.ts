import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/user';

export async function GET(req: NextRequest, { params }: { params: { email: string } }) {
  const email = params.email;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(
    req: NextRequest,
    { params, body }: { params: { email: string }; body?: any }
  ) {
    const email = params.email;
    console.log(body)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    const { name, phoneNumber, imageUrl, country, city, specificLocal } = body;
    
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { name, phoneNumber, imageUrl, country, city, specificLocal },
        { new: true }
      );
  
      if (!updatedUser) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      return NextResponse.json({ user: updatedUser }, { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }