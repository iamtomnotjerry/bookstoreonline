import { NextResponse } from 'next/server';
import User from '../../../models/user';
import dbConnect from '@/app/lib/mongodb-connection-module';
export async function POST(req: any) {
  try {
    await dbConnect();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select('_id');
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
